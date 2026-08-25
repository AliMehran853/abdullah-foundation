import {
    CheckCircle2,
    Cookie,
    Mail,
    MapPin,
    ShieldCheck,
} from "lucide-react";

import Container from "../components/ui/Container";

function PrivacyPolicy() {
    return (
        <main
            className="
                min-h-screen
                bg-slate-50
                py-16
                sm:py-20
                lg:py-24
            "
        >
            <Container>
                {/* =================================================
                    Page Header
                ================================================== */}

                <div
                    className="
                        mx-auto
                        max-w-4xl
                    "
                >
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-primary-100
                            bg-primary-50
                            px-4
                            py-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-primary-700
                        "
                    >
                        <ShieldCheck size={15} />

                        Privacy Policy
                    </div>

                    <h1
                        className="
                            mt-5
                            text-3xl
                            font-bold
                            leading-tight
                            tracking-tight
                            text-slate-900

                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Privacy Policy - Abdullah Foundation
                    </h1>

                    <p
                        className="
                            mt-4
                            text-sm
                            font-medium
                            text-slate-500

                            sm:text-base
                        "
                    >
                        Effective Date: 25 August 2026
                    </p>
                </div>

                {/* =================================================
                    Content
                ================================================== */}

                <article
                    className="
                        mx-auto
                        mt-10
                        max-w-4xl
                        rounded-[2rem]
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-[0_20px_60px_rgba(15,23,42,0.06)]

                        sm:p-8
                        lg:p-10
                    "
                >
                    {/* Introduction */}

                    <p
                        className="
                            text-base
                            leading-8
                            text-slate-600
                        "
                    >
                        Abdullah Foundation ("we") is a charitable Trust
                        registered in Muzaffarnagar, Uttar Pradesh, India.
                        This policy explains how we handle your data as per
                        DPDP Act 2023.
                    </p>

                    {/* 1 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            1. Data We Collect
                        </h2>

                        <ul className="mt-4 space-y-3">
                            <li
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    sm:text-base
                                "
                            >
                                <CheckCircle2
                                    size={18}
                                    className="
                                        mt-1
                                        shrink-0
                                        text-primary-700
                                    "
                                />

                                <span>
                                    Name, Email, Mobile, PAN (for 80G
                                    receipt only), and Donation Amount.
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* 2 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            2. What We NEVER Collect
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            We never collect, store, or see your Card
                            Number, CVV, UPI PIN, or Expiry. All payment data
                            is entered directly on Razorpay's secure page.
                        </p>
                    </section>

                    {/* 3 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            3. Payment Processor
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            We use Razorpay Payment Pages. Razorpay is
                            PCI-DSS compliant and processes all transactions.
                            Please refer to Razorpay's Privacy Policy for
                            more information about payment processing.
                        </p>
                    </section>

                    {/* 4 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            4. Use of Data
                        </h2>

                        <ul className="mt-4 space-y-3">
                            {[
                                "To issue receipts.",
                                "For 80G compliance and related requirements.",
                                "For audit and legal compliance.",
                                "To send updates about our work. You can opt out at any time.",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="
                                        flex
                                        items-start
                                        gap-3
                                        text-sm
                                        leading-7
                                        text-slate-600
                                        sm:text-base
                                    "
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="
                                            mt-1
                                            shrink-0
                                            text-primary-700
                                        "
                                    />

                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* 5 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            5. Donation Restriction
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            As per FCRA law, we ONLY accept donations from
                            Indian citizens in India (INR). We do NOT accept
                            foreign funds until we get FCRA approval.
                            This note is also mentioned on the Donate page.
                        </p>
                    </section>

                    {/* 6 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            6. Data Security
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            All donor data is stored only in Razorpay
                            Dashboard and secure Google Workspace with 2FA.
                            We do not store data in Excel sheets. Access is
                            restricted to 2 trustees only.
                        </p>
                    </section>

                    {/* 7 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            7. Your Rights
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            Under DPDP Act 2023, you can ask for correction
                            or deletion of your data by writing to us at{" "}
                            <a
                                href="mailto:abdullahfoundationmzn@gmail.com"
                                className="
                                    font-semibold
                                    text-primary-700
                                    hover:text-primary-800
                                "
                            >
                                abdullahfoundationmzn@gmail.com
                            </a>
                            . We will reply within 30 days.
                        </p>
                    </section>

                    {/* 8 */}

                    <section className="mt-10">
                        <h2
                            className="
                                flex
                                items-center
                                gap-3
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            <Cookie
                                size={21}
                                className="text-primary-700"
                            />

                            8. Cookies
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                            "
                        >
                            Our website is a static site hosted on
                            Vercel/Cloudflare and does not use tracking
                            cookies except basic analytics.
                        </p>
                    </section>

                    {/* 9 */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            9. Grievance Officer
                        </h2>

                        <div
                            className="
                                mt-4
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                p-5
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    text-slate-900
                                "
                            >
                                Shahadat Faridi
                            </p>

                            <p
                                className="
                                    mt-2
                                    flex
                                    items-start
                                    gap-2
                                    text-sm
                                    leading-6
                                    text-slate-600
                                "
                            >
                                <Mail
                                    size={16}
                                    className="
                                        mt-1
                                        shrink-0
                                        text-primary-700
                                    "
                                />

                                abdullahfoundationmzn@gmail.com
                            </p>

                            <p
                                className="
                                    mt-2
                                    flex
                                    items-start
                                    gap-2
                                    text-sm
                                    leading-6
                                    text-slate-600
                                "
                            >
                                <MapPin
                                    size={16}
                                    className="
                                        mt-1
                                        shrink-0
                                        text-primary-700
                                    "
                                />

                                Abdullah Foundation, Muzaffarnagar,
                                UP - 251001
                            </p>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    font-medium
                                    text-slate-600
                                "
                            >
                                Mobile / WhatsApp: +91-7088091108
                            </p>
                        </div>
                    </section>
                </article>
            </Container>
        </main>
    );
}

export default PrivacyPolicy;