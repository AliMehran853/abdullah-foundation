import {
    CheckCircle2,
    FileText,
    MapPin,
} from "lucide-react";

import Container from "../components/ui/Container";

function TermsOfService() {
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
                            border-accent-100
                            bg-accent-50
                            px-4
                            py-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-accent-700
                        "
                    >
                        <FileText size={15} />

                        Terms of Service
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
                        Terms of Service - Abdullah Foundation
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
                    {/* 1 */}

                    <section>
                        <h2
                            className="
                                flex
                                items-start
                                gap-3
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary-50
                                    text-sm
                                    text-primary-700
                                "
                            >
                                1
                            </span>

                            Website Agreement
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
                            By using this website you agree to these terms.
                        </p>
                    </section>

                    {/* 2 */}

                    <section className="mt-10">
                        <h2
                            className="
                                flex
                                items-start
                                gap-3
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary-50
                                    text-sm
                                    text-primary-700
                                "
                            >
                                2
                            </span>

                            Donations
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
                            Donations are voluntary and non-refundable.
                            Duplicate transactions reported within 7 days
                            will be refunded.
                        </p>
                    </section>

                    {/* 3 */}

                    <section className="mt-10">
                        <h2
                            className="
                                flex
                                items-start
                                gap-3
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary-50
                                    text-sm
                                    text-primary-700
                                "
                            >
                                3
                            </span>

                            Financial Information
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
                            We do not store any financial information on
                            our website.
                        </p>
                    </section>

                    {/* 4 */}

                    <section className="mt-10">
                        <h2
                            className="
                                flex
                                items-start
                                gap-3
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary-50
                                    text-sm
                                    text-primary-700
                                "
                            >
                                4
                            </span>

                            Tax Registration
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
                            12A/80G is under process. Receipts will be
                            issued as per applicable Income Tax rules.
                        </p>
                    </section>

                    {/* 5 */}

                    <section className="mt-10">
                        <h2
                            className="
                                flex
                                items-start
                                gap-3
                                text-xl
                                font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-primary-50
                                    text-sm
                                    text-primary-700
                                "
                            >
                                5
                            </span>

                            Governing Law
                        </h2>

                        <div
                            className="
                                mt-4
                                flex
                                items-start
                                gap-3
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                p-5
                            "
                        >
                            <MapPin
                                size={18}
                                className="
                                    mt-1
                                    shrink-0
                                    text-primary-700
                                "
                            />

                            <p
                                className="
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    sm:text-base
                                "
                            >
                                Courts of Muzaffarnagar, Uttar Pradesh,
                                India.
                            </p>
                        </div>
                    </section>

                    {/* Notice */}

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
                            <CheckCircle2
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
                                These terms apply to the use of the
                                Abdullah Foundation website and its donation
                                related services.
                            </p>
                        </div>
                    </div>
                </article>
            </Container>
        </main>
    );
}

export default TermsOfService;