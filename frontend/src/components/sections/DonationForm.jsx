import { useCallback, useEffect, useRef, useState } from "react";

import {
    CreditCard,
    Loader2,
    Lock,
    ShieldCheck,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

const RAZORPAY_SCRIPT_URL =
    "https://checkout.razorpay.com/v1/checkout.js";

const AMOUNT_PRESETS = [100, 250, 500, 1000, 5000];

let checkoutScriptPromise = null;

function loadRazorpayScript() {
    if (!checkoutScriptPromise) {
        checkoutScriptPromise = new Promise((resolve, reject) => {
            if (window.Razorpay) {
                resolve();
                return;
            }

            const script = document.createElement("script");
            script.src = RAZORPAY_SCRIPT_URL;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => {
                checkoutScriptPromise = null;
                reject(new Error("Unable to load payment gateway."));
            };
            document.body.appendChild(script);
        });
    }
    return checkoutScriptPromise;
}

const INITIAL_FORM = {
    amount: "",
    name: "",
    email: "",
    mobile: "",
    pan: "",
};

function DonationForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [preset, setPreset] = useState(500);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);
    const amountInputRef = useRef(null);

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            amount: preset ? String(preset) : "",
        }));
    }, [preset]);

    const updateField = useCallback((field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setError("");
    }, []);

    const selectPreset = useCallback(
        (value) => {
            setPreset(value);
            setError("");
        },
        []
    );

    const validateForm = () => {
        const amountNum = Number(form.amount);
        if (!Number.isInteger(amountNum) || amountNum < 1) {
            return "Please enter a valid donation amount.";
        }
        if (form.name.trim().length < 2) {
            return "Please enter your full name.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            return "Please enter a valid email address.";
        }
        if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
            return "Please enter a valid 10-digit mobile number.";
        }
        if (form.pan.trim() && !/^[A-Z]{5}\d{4}[A-Z]$/i.test(form.pan.trim())) {
            return "PAN must be 10 characters (e.g. ABCDE1234F).";
        }
        return "";
    };

    const resetForm = () => {
        setForm(INITIAL_FORM);
        setPreset(500);
        setStatus("idle");
        setError("");
        setResult(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setStatus("submitting");
        setError("");

        try {
            const orderResponse = await fetch(`${API_BASE}/api/payments/create-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: Number(form.amount),
                    name: form.name.trim(),
                    email: form.email.trim(),
                    mobile: form.mobile.trim(),
                    pan: form.pan.trim().toUpperCase() || undefined,
                }),
            });

            const orderData = await orderResponse.json();

            if (!orderResponse.ok || !orderData.success) {
                throw new Error(
                    orderData.error?.message ||
                        "Could not create donation. Please try again."
                );
            }

            await loadRazorpayScript();

            openCheckout(orderData.data);
        } catch (err) {
            setStatus("error");
            setError(err.message || "Something went wrong. Please try again.");
        }
    };

    const openCheckout = (order) => {
        const options = {
            key: order.keyId,
            amount: order.amountPaise,
            currency: order.currency || "INR",
            name: "Abdullah Foundation",
            description: "Free education, food & shelter for children in need",
            order_id: order.orderId,
            prefill: {
                name: form.name.trim(),
                email: form.email.trim(),
                contact: "+91" + form.mobile.trim(),
            },
            theme: { color: "#1d4ed8" },
            modal: {
                ondismiss: () => {
                    setStatus("idle");
                },
            },
            handler: async (response) => {
                await verifyPayment(response, order);
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.on("payment.failed", (response) => {
            const failure = response?.error?.description || "Payment failed.";
            setStatus("error");
            setError(`${failure} Your donation was not charged.`);
        });
        razorpay.open();
    };

    const verifyPayment = async (response, order) => {
        setStatus("verify");

        try {
            const verifyResponse = await fetch(`${API_BASE}/api/payments/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.success) {
                throw new Error(
                    verifyData.error?.message ||
                        "Donation could not be verified. Please contact the foundation."
                );
            }

            setResult(verifyData.data);
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setError(
                err.message ||
                    "Payment may have succeeded but could not be verified. Please contact the foundation."
            );
        }
    };

    if (status === "success" && result) {
        return (
            <div className="rounded-[1.5rem] border border-emerald-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <ShieldCheck size={22} />
                </div>
                <h4 className="mt-4 text-lg font-bold text-dark-900">
                    JazakAllah Khair! Thanks for your support
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Your donation of has been received by Abdullah Foundation.
                    A receipt with 80G details (when PAN is provided) will be
                    shared via email.
                </p>
                <p className="mt-3 break-all text-xs text-slate-400">
                    Payment ID: {result.paymentId}
                </p>
                <button
                    type="button"
                    onClick={resetForm}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
                >
                    Make another donation
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-primary-100 bg-white p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6"
        >
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <CreditCard size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-dark-900">
                        Donate Online
                    </h4>
                    <p className="mt-0.5 text-xs leading-5 text-slate-400">
                        Cards, UPI, net banking — secure Razorpay checkout
                    </p>
                </div>
            </div>

            <div className="mt-5 space-y-4">
                <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Amount (INR)
                    </label>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {AMOUNT_PRESETS.map((value) => (
                            <button
                                key={value}
                                type="button"
                                onClick={() => selectPreset(value)}
                                className={
                                    preset === value && !form.amount.trim()
                                        ? "rounded-full bg-primary-700 px-4 py-2 text-xs font-bold text-white"
                                        : "rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-primary-300 hover:text-primary-700"
                                }
                            >
                                ₹{value}
                            </button>
                        ))}
                    </div>

                    <input
                        ref={amountInputRef}
                        type="number"
                        min={1}
                        step={1}
                        placeholder="Custom amount"
                        value={form.amount}
                        onChange={(event) => {
                            if (!event.target.value) {
                                setPreset(null);
                            }
                            updateField("amount", event.target.value);
                        }}
                        onFocus={() => setPreset(null)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-dark-900 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    />
                </div>

                <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-dark-900 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    />
                </div>

                <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                        Email *
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-dark-900 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                    />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Mobile (10-digit) *
                        </label>
                        <input
                            type="tel"
                            placeholder="10-digit mobile"
                            value={form.mobile}
                            onChange={(event) =>
                                updateField("mobile", event.target.value.replace(/\D/g, ""))
                            }
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-dark-900 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                    </div>

                    <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            PAN (optional)
                        </label>
                        <input
                            type="text"
                            placeholder="For 80G receipt"
                            maxLength={10}
                            value={form.pan}
                            onChange={(event) =>
                                updateField("pan", event.target.value.toUpperCase())
                            }
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-dark-900 outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
                        />
                    </div>
                </div>

                {error ? (
                    <p className="rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">
                        {error}
                    </p>
                ) : null}

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "verify"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {status === "submitting" || status === "verify" ? (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            {status === "verify"
                                ? "Verifying payment..."
                                : "Preparing secure checkout..."}
                        </>
                    ) : (
                        <>
                            <Lock size={15} />
                            Donate Now
                        </>
                    )}
                </button>

                <p className="flex items-start gap-2 text-[11px] leading-5 text-slate-400">
                    <ShieldCheck
                        size={14}
                        className="mt-0.5 shrink-0 text-primary-600"
                    />
                    Payments are processed securely by Razorpay. You will not be
                    charged until you confirm the payment.
                </p>
            </div>
        </form>
    );
}

export default DonationForm;