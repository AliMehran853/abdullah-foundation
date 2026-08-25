import {
    CheckCircle2,
    FileCheck2,
    Mail,
    MapPin,
    ShieldCheck,
} from "lucide-react";

import Container from "../components/ui/Container";

function Transparency() {
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

                <div className="mx-auto max-w-4xl">
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

                        Transparency & Accountability
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
                        Transparency & Accountability - Abdullah Foundation
                    </h1>

                    <p
                        className="
                            mt-4
                            max-w-3xl
                            text-sm
                            leading-7
                            text-slate-500

                            sm:text-base
                        "
                    >
                        Abdullah Foundation was founded in memory of
                        Late Master Abdullah to provide education and
                        practical support for underprivileged children and
                        families.
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
                    {/* 1. Legal Details */}

                    <section>
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
                            <FileCheck2
                                size={22}
                                className="text-primary-700"
                            />

                            1. Legal Details
                        </h2>

                        <div
                            className="
                                mt-5
                                grid
                                gap-3
                            "
                        >
                            <div
                                className="
                                    rounded-xl
                                    bg-slate-50
                                    px-4
                                    py-3
                                "
                            >
                                <p className="text-xs text-slate-400">
                                    Organization Name
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    Abdullah Foundation
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    bg-slate-50
                                    px-4
                                    py-3
                                "
                            >
                                <p className="text-xs text-slate-400">
                                    Type
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    Charitable Trust
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    bg-slate-50
                                    px-4
                                    py-3
                                "
                            >
                                <p className="text-xs text-slate-400">
                                    Location
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    Muzaffarnagar, Uttar Pradesh, India
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                                mt-5
                                rounded-2xl
                                border
                                border-amber-200
                                bg-amber-50
                                p-5
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    text-amber-900
                                "
                            >
                                PAN & Trust Deed details available on
                                request for donors and authorities.
                            </p>
                        </div>
                    </section>

                    {/* 2. Compliance */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            2. Compliance Status
                        </h2>

                        <ul className="mt-5 space-y-3">
                            {[
                                "12A Registration: Applied For",
                                "80G Registration: Applied For (Donors please provide PAN for future 80G benefit)",
                                "FCRA Registration: Not Applied. We do NOT accept any foreign donations.",
                                "CSR-1: Will be applied after 12A.",
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

                    {/* 3. Financials */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            3. Financials
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
                            Annual audit reports will be published here
                            every year after filing.
                        </p>
                    </section>

                    {/* 4. Child Protection */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            4. No Child Labour, No Discrimination
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
                            We do not discriminate on basis of religion,
                            caste, or gender.
                        </p>
                    </section>

                    {/* 5. Contact */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            5. Contact for Verification
                        </h2>

                        <div
                            className="
                                mt-5
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
                                    font-bold
                                    text-slate-900
                                "
                            >
                                Shahadat Faridi
                            </p>

                            <p
                                className="
                                    mt-3
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
                                    text-sm
                                    font-medium
                                    text-slate-600
                                "
                            >
                                +91-7088091108
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
                        </div>
                    </section>

                    {/* 6. Domain & Security */}

                    <section className="mt-10">
                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            6. Domain & Security
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
                            This site is hosted on Vercel with HTTPS and
                            uses only Razorpay for payments.
                        </p>
                    </section>

                    {/* Closing */}

                    <div
                        className="
                            mt-10
                            rounded-2xl
                            border
                            border-primary-100
                            bg-primary-50
                            p-5
                        "
                    >
                        <div className="flex items-start gap-3">
                            <ShieldCheck
                                size={19}
                                className="
                                    mt-0.5
                                    shrink-0
                                    text-primary-700
                                "
                            />

                            <p
                                className="
                                    text-sm
                                    leading-7
                                    text-primary-900
                                "
                            >
                                Abdullah Foundation is committed to
                                transparency, accountability, and responsible
                                service to the community.
                            </p>
                        </div>
                    </div>
                </article>
            </Container>
        </main>
    );
}

export default Transparency;