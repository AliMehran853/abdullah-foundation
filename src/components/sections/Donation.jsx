import {
    ArrowRight,
    CheckCircle2,
    Copy,
    Heart,
    Landmark,
    QrCode,
    ShieldCheck,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function Donation() {
    return (
        <section
            id="donate"
            className="
                relative
                isolate
                overflow-hidden
                bg-white
                py-20
                sm:py-24
                lg:py-32
            "
        >
            {/* =====================================================
                Background Decoration
            ====================================================== */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-24
                    -z-10
                    h-96
                    w-96
                    rounded-full
                    bg-primary-50/80
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-0
                    -z-10
                    h-96
                    w-96
                    rounded-full
                    bg-accent-50/70
                    blur-3xl
                "
            />

            <Container>
                {/* =================================================
                    Section Heading
                ================================================== */}

                <div className="relative z-10">
                    <SectionTitle
                        eyebrow="Support Our Mission"
                        title="Help Create A Brighter Future"
                        description="Your support can help provide children with education, learning resources, food, and care."
                    />
                </div>

                {/* =================================================
                    Main Donation Card
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-14
                        max-w-6xl
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-slate-200
                        bg-white
                        shadow-[0_30px_90px_rgba(15,23,42,0.10)]
                    "
                >
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

                        {/* =================================================
                            LEFT - DONATION MESSAGE
                        ================================================== */}

                        <div
                            className="
                                relative
                                overflow-hidden
                                bg-primary-700
                                p-7
                                text-white
                                sm:p-10
                                lg:p-12
                                xl:p-14
                            "
                        >
                            {/* Decorative circles */}

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-72
                                    w-72
                                    rounded-full
                                    bg-white/10
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-36
                                    -left-24
                                    h-80
                                    w-80
                                    rounded-full
                                    bg-accent-500/20
                                    blur-2xl
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    right-10
                                    bottom-10
                                    h-20
                                    w-20
                                    rounded-full
                                    border
                                    border-white/10
                                "
                            />

                            {/* Content */}

                            <div className="relative z-10">

                                {/* Icon */}

                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        text-orange-300
                                        backdrop-blur-sm
                                    "
                                >
                                    <Heart
                                        size={24}
                                        fill="currentColor"
                                    />
                                </div>

                                {/* Eyebrow */}

                                <p
                                    className="
                                        mt-8
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-blue-200
                                    "
                                >
                                    Make A Difference
                                </p>

                                {/* Heading */}

                                <h3
                                    className="
                                        mt-3
                                        max-w-md
                                        text-3xl
                                        font-bold
                                        leading-[1.15]
                                        tracking-tight
                                        text-white
                                        sm:text-4xl
                                        lg:text-[2.7rem]
                                    "
                                >
                                    A small act of kindness can create

                                    <span
                                        className="
                                            mt-1
                                            block
                                            text-orange-300
                                        "
                                    >
                                        a brighter future.
                                    </span>
                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        mt-6
                                        max-w-lg
                                        text-sm
                                        leading-7
                                        text-blue-100
                                        sm:text-base
                                    "
                                >
                                    Your support can help Abdullah
                                    Foundation provide children with
                                    learning opportunities and essential
                                    support.
                                </p>

                                {/* =================================================
                                    What Your Support Helps With
                                ================================================== */}

                                <div className="mt-9 space-y-4">

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-[0.16em]
                                            text-blue-200
                                        "
                                    >
                                        Your support can help with
                                    </p>

                                    <div className="space-y-3">

                                        <div className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={19}
                                                className="
                                                    mt-0.5
                                                    shrink-0
                                                    text-orange-300
                                                "
                                            />

                                            <span
                                                className="
                                                    text-sm
                                                    leading-6
                                                    text-blue-50
                                                "
                                            >
                                                Educational materials and
                                                books
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={19}
                                                className="
                                                    mt-0.5
                                                    shrink-0
                                                    text-orange-300
                                                "
                                            />

                                            <span
                                                className="
                                                    text-sm
                                                    leading-6
                                                    text-blue-50
                                                "
                                            >
                                                Learning and computer
                                                education
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={19}
                                                className="
                                                    mt-0.5
                                                    shrink-0
                                                    text-orange-300
                                                "
                                            />

                                            <span
                                                className="
                                                    text-sm
                                                    leading-6
                                                    text-blue-50
                                                "
                                            >
                                                Food and basic care
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* =================================================
                                    Trust Card
                                ================================================== */}

                                <div
                                    className="
                                        mt-10
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        p-4
                                        backdrop-blur-md
                                    "
                                >
                                    <div className="flex items-start gap-3">

                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-white/10
                                                text-orange-300
                                            "
                                        >
                                            <ShieldCheck size={19} />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-sm
                                                    font-semibold
                                                    text-white
                                                "
                                            >
                                                Giving with purpose
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    leading-5
                                                    text-blue-200
                                                "
                                            >
                                                Every contribution is intended
                                                to support the foundation's
                                                work with children.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* =================================================
                            RIGHT - PAYMENT OPTIONS
                        ================================================== */}

                        <div
                            className="
                                bg-slate-50
                                p-7
                                sm:p-10
                                lg:p-12
                                xl:p-14
                            "
                        >
                            {/* =================================================
                                Payment Header
                            ================================================== */}

                            <div className="text-center">

                                <div
                                    className="
                                        mx-auto
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-white
                                        text-primary-700
                                        shadow-[0_8px_25px_rgba(15,23,42,0.07)]
                                    "
                                >
                                    <Heart size={24} />
                                </div>

                                <p
                                    className="
                                        mt-5
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-primary-700
                                    "
                                >
                                    Ways To Give
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        tracking-tight
                                        text-dark-900
                                        sm:text-3xl
                                    "
                                >
                                    Support Abdullah Foundation
                                </h3>

                                <p
                                    className="
                                        mx-auto
                                        mt-3
                                        max-w-md
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    "
                                >
                                    Donation details will be available here
                                    once the foundation provides the official
                                    payment information.
                                </p>

                            </div>

                            {/* =================================================
                                UPI CARD
                            ================================================== */}

                            <div
                                className="
                                    mt-8
                                    rounded-[1.75rem]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-sm
                                    sm:p-6
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-4
                                    "
                                >

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-primary-50
                                                text-primary-700
                                            "
                                        >
                                            <QrCode size={20} />
                                        </div>

                                        <div>
                                            <h4
                                                className="
                                                    text-sm
                                                    font-bold
                                                    text-dark-900
                                                "
                                            >
                                                UPI Payment
                                            </h4>

                                            <p
                                                className="
                                                    mt-0.5
                                                    text-xs
                                                    text-slate-400
                                                "
                                            >
                                                Scan to donate
                                            </p>
                                        </div>

                                    </div>

                                    <span
                                        className="
                                            rounded-full
                                            bg-amber-50
                                            px-3
                                            py-1
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-wider
                                            text-amber-600
                                        "
                                    >
                                        Coming Soon
                                    </span>

                                </div>

                                {/* QR Placeholder */}

                                <div
                                    className="
                                        mx-auto
                                        mt-6
                                        flex
                                        aspect-square
                                        w-full
                                        max-w-[220px]
                                        items-center
                                        justify-center
                                        rounded-[1.5rem]
                                        border
                                        border-dashed
                                        border-slate-300
                                        bg-slate-50
                                    "
                                >
                                    <div className="text-center">

                                        <div
                                            className="
                                                mx-auto
                                                flex
                                                h-16
                                                w-16
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                bg-white
                                                text-slate-300
                                                shadow-sm
                                            "
                                        >
                                            <QrCode
                                                size={42}
                                                strokeWidth={1.3}
                                            />
                                        </div>

                                        <p
                                            className="
                                                mt-4
                                                text-sm
                                                font-semibold
                                                text-slate-500
                                            "
                                        >
                                            Official QR Code
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                text-slate-400
                                            "
                                        >
                                            Will be added here
                                        </p>

                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        text-xs
                                        text-slate-400
                                    "
                                >
                                    <ShieldCheck size={14} />

                                    Official payment details only
                                </div>

                            </div>

                            {/* =================================================
                                Divider
                            ================================================== */}

                            <div className="my-7 flex items-center gap-4">

                                <div className="h-px flex-1 bg-slate-200" />

                                <span
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-slate-400
                                    "
                                >
                                    Or Bank Transfer
                                </span>

                                <div className="h-px flex-1 bg-slate-200" />

                            </div>

                            {/* =================================================
                                Bank Card
                            ================================================== */}

                            <div
                                className="
                                    rounded-[1.75rem]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-sm
                                    sm:p-6
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-primary-50
                                            text-primary-700
                                        "
                                    >
                                        <Landmark size={20} />
                                    </div>

                                    <div>
                                        <h4
                                            className="
                                                text-sm
                                                font-bold
                                                text-dark-900
                                            "
                                        >
                                            Bank Transfer
                                        </h4>

                                        <p
                                            className="
                                                mt-0.5
                                                text-xs
                                                text-slate-400
                                            "
                                        >
                                            Official account information
                                        </p>
                                    </div>

                                </div>

                                {/* Account Details */}

                                <div className="mt-5 space-y-3">

                                    <div
                                        className="
                                            flex
                                            flex-col
                                            gap-1
                                            rounded-xl
                                            bg-slate-50
                                            px-4
                                            py-3
                                            sm:flex-row
                                            sm:items-center
                                            sm:justify-between
                                            sm:gap-4
                                        "
                                    >
                                        <span
                                            className="
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            Account Name
                                        </span>

                                        <span
                                            className="
                                                text-sm
                                                font-semibold
                                                text-dark-900
                                            "
                                        >
                                            Abdullah Foundation
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            flex
                                            flex-col
                                            gap-1
                                            rounded-xl
                                            bg-slate-50
                                            px-4
                                            py-3
                                            sm:flex-row
                                            sm:items-center
                                            sm:justify-between
                                            sm:gap-4
                                        "
                                    >
                                        <span
                                            className="
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            Account Number
                                        </span>

                                        <span
                                            className="
                                                text-sm
                                                font-medium
                                                text-slate-400
                                            "
                                        >
                                            Not provided yet
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            flex
                                            flex-col
                                            gap-1
                                            rounded-xl
                                            bg-slate-50
                                            px-4
                                            py-3
                                            sm:flex-row
                                            sm:items-center
                                            sm:justify-between
                                            sm:gap-4
                                        "
                                    >
                                        <span
                                            className="
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            IFSC
                                        </span>

                                        <span
                                            className="
                                                text-sm
                                                font-medium
                                                text-slate-400
                                            "
                                        >
                                            Not provided yet
                                        </span>
                                    </div>

                                </div>

                                {/* Disabled Copy */}

                                <button
                                    type="button"
                                    disabled
                                    className="
                                        mt-4
                                        flex
                                        w-full
                                        cursor-not-allowed
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        px-4
                                        py-3
                                        text-xs
                                        font-semibold
                                        text-slate-400
                                    "
                                >
                                    <Copy size={15} />

                                    Copy account details
                                </button>

                            </div>

                            {/* =================================================
                                Information Notice
                            ================================================== */}

                            <div
                                className="
                                    mt-5
                                    flex
                                    items-start
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-primary-100
                                    bg-primary-50/60
                                    p-4
                                "
                            >

                                <ShieldCheck
                                    size={18}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-primary-700
                                    "
                                />

                                <p
                                    className="
                                        text-xs
                                        leading-5
                                        text-primary-800
                                    "
                                >
                                    Payment information will be updated
                                    after the foundation provides the
                                    official UPI and bank details.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                {/* =================================================
                    Bottom CTA
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-10
                        max-w-2xl
                        text-center
                    "
                >

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2.5
                            text-xs
                            font-semibold
                            text-slate-600
                            shadow-sm
                            sm:text-sm
                        "
                    >
                        <Heart
                            size={15}
                            className="text-accent-500"
                            fill="currentColor"
                        />

                        Every child deserves a chance to learn.

                        <ArrowRight
                            size={15}
                            className="text-primary-700"
                        />
                    </div>

                </div>

            </Container>
        </section>
    );
}

export default Donation;