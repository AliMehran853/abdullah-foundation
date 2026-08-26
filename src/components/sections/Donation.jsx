import {
    ArrowRight,
    CheckCircle2,
    Heart,
    Phone,
    QrCode,
    ShieldCheck,
    Smartphone,
    MessageCircle,
    Copy,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import upiQrImage from "../../assets/donation/abdullah-foundation-upi-qr.png";

const WHATSAPP_DONATE_URL =
    "https://wa.me/917088091108";

const UPI_PHONE = "7088091108";

const UPI_ID =
    "BHARATPE09X9Y1H8Z1V91367@yesbankltd";

const PAYMENT_NAME =
    "ABDULLAH FOUNDATION MUZAFFARNAGAR";

function Donation() {
    const handleCopyUpi = async () => {
        try {
            await navigator.clipboard.writeText(UPI_ID);
        } catch (error) {
            console.error("Failed to copy UPI ID:", error);
        }
    };

    return (
        <section
            id="donate"
            className="
                relative
                isolate
                overflow-hidden
                bg-white
                py-16
                sm:py-20
                lg:py-28
            "
        >
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-24
                    -z-10
                    h-72
                    w-72
                    rounded-full
                    bg-primary-50/80
                    blur-3xl

                    sm:h-96
                    sm:w-96
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
                    h-72
                    w-72
                    rounded-full
                    bg-accent-50/70
                    blur-3xl

                    sm:h-96
                    sm:w-96
                "
            />

            <Container>

                <div className="relative z-10">
                    <SectionTitle
                        eyebrow="Support Abdullah Foundation"
                        title="Help Create A Brighter Future"
                        description="Your support can help provide free education, food, shelter, healthcare, and other essential support to children and families in need."
                    />
                </div>

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-10
                        max-w-6xl
                        overflow-hidden
                        rounded-[1.75rem]
                        border
                        border-slate-200
                        bg-white
                        shadow-[0_30px_90px_rgba(15,23,42,0.10)]

                        sm:mt-14
                        sm:rounded-[2rem]
                    "
                >
                    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

                        <div
                            className="
                                relative
                                overflow-hidden
                                bg-primary-700
                                p-6
                                text-white

                                sm:p-10
                                lg:p-12
                                xl:p-14
                            "
                        >

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-60
                                    w-60
                                    rounded-full
                                    bg-white/10

                                    sm:h-72
                                    sm:w-72
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-36
                                    -left-24
                                    h-72
                                    w-72
                                    rounded-full
                                    bg-accent-500/20
                                    blur-2xl

                                    sm:h-80
                                    sm:w-80
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    right-8
                                    bottom-8
                                    h-16
                                    w-16
                                    rounded-full
                                    border
                                    border-white/10

                                    sm:right-10
                                    sm:bottom-10
                                    sm:h-20
                                    sm:w-20
                                "
                            />

                            <div className="relative z-10">

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        text-orange-300
                                        backdrop-blur-sm

                                        sm:h-14
                                        sm:w-14
                                    "
                                >
                                    <Heart
                                        size={22}
                                        fill="currentColor"
                                    />
                                </div>

                                <p
                                    className="
                                        mt-7
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-blue-200

                                        sm:mt-8
                                        sm:text-xs
                                        sm:tracking-[0.2em]
                                    "
                                >
                                    Make A Difference
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        max-w-md
                                        text-2xl
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

                                <p
                                    className="
                                        mt-5
                                        max-w-lg
                                        text-sm
                                        leading-6
                                        text-blue-100

                                        sm:mt-6
                                        sm:text-base
                                        sm:leading-7
                                    "
                                >
                                    Your support helps Abdullah Foundation
                                    continue its mission of serving
                                    underprivileged children and families
                                    with dignity and compassion.
                                </p>

                                <div
                                    className="
                                        mt-8
                                        space-y-4

                                        sm:mt-9
                                    "
                                >
                                    <p
                                        className="
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-[0.14em]
                                            text-blue-200

                                            sm:text-xs
                                            sm:tracking-[0.16em]
                                        "
                                    >
                                        Your support can help with
                                    </p>

                                    <div className="space-y-3">

                                        <div className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={18}
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
                                                Free education, books, and
                                                educational support
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={18}
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
                                                Food, clothing, medicine,
                                                and essential care
                                            </span>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={18}
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
                                                Housing, livelihood, and
                                                support for families in need
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-8
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        p-4
                                        backdrop-blur-md

                                        sm:mt-10
                                    "
                                >
                                    <div className="flex items-start gap-3">

                                        <div
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-white/10
                                                text-orange-300

                                                sm:h-10
                                                sm:w-10
                                            "
                                        >
                                            <ShieldCheck size={18} />
                                        </div>

                                        <div className="min-w-0">
                                            <p
                                                className="
                                                    text-sm
                                                    font-semibold
                                                    text-white
                                                "
                                            >
                                                Give with purpose
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    leading-5
                                                    text-blue-200
                                                "
                                            >
                                                For donation enquiries,
                                                please contact Abdullah
                                                Foundation directly through
                                                WhatsApp.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className="
                                bg-slate-50
                                p-6

                                sm:p-10
                                lg:p-12
                                xl:p-14
                            "
                        >

                            <div className="text-center">

                                <div
                                    className="
                                        mx-auto
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-white
                                        text-primary-700
                                        shadow-[0_8px_25px_rgba(15,23,42,0.07)]

                                        sm:h-14
                                        sm:w-14
                                    "
                                >
                                    <Heart size={22} />
                                </div>

                                <p
                                    className="
                                        mt-4
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.16em]
                                        text-primary-700

                                        sm:mt-5
                                        sm:text-xs
                                        sm:tracking-[0.18em]
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
                                    Contact the foundation through WhatsApp
                                    or use the official UPI, GPay, or PhonePe
                                    payment details below.
                                </p>

                            </div>

                            <a
                                href={WHATSAPP_DONATE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    mt-7
                                    block
                                    rounded-[1.5rem]
                                    border
                                    border-accent-200
                                    bg-white
                                    p-5
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-accent-300
                                    hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]

                                    sm:mt-8
                                    sm:rounded-[1.75rem]
                                    sm:p-6
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-3
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-accent-50
                                                text-accent-600
                                            "
                                        >
                                            <MessageCircle size={20} />
                                        </div>

                                        <div className="min-w-0">
                                            <h4
                                                className="
                                                    text-sm
                                                    font-bold
                                                    text-dark-900
                                                "
                                            >
                                                WhatsApp Donation
                                            </h4>

                                            <p
                                                className="
                                                    mt-0.5
                                                    text-xs
                                                    leading-5
                                                    text-slate-400
                                                "
                                            >
                                                Contact the foundation directly
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowRight
                                        size={18}
                                        className="
                                            shrink-0
                                            text-accent-500
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />
                                </div>

                                <div
                                    className="
                                        mt-5
                                        rounded-xl
                                        bg-accent-50
                                        px-4
                                        py-3
                                    "
                                >
                                    <p
                                        className="
                                            text-xs
                                            font-semibold
                                            text-accent-700
                                        "
                                    >
                                        WhatsApp / Donate
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            break-all
                                            text-sm
                                            font-bold
                                            tracking-wide
                                            text-accent-900
                                        "
                                    >
                                        +91 7088091108
                                    </p>
                                </div>
                            </a>

                            <div
                                className="
                                    mt-5
                                    rounded-[1.5rem]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-sm

                                    sm:mt-6
                                    sm:rounded-[1.75rem]
                                    sm:p-6
                                "
                            >
                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-3

                                        sm:flex-row
                                        sm:items-center
                                        sm:justify-between
                                        sm:gap-4
                                    "
                                >
                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-primary-50
                                                text-primary-700
                                            "
                                        >
                                            <Smartphone size={20} />
                                        </div>

                                        <div>
                                            <h4
                                                className="
                                                    text-sm
                                                    font-bold
                                                    text-dark-900
                                                "
                                            >
                                                UPI / GPay / PhonePe
                                            </h4>

                                            <p
                                                className="
                                                    mt-0.5
                                                    text-xs
                                                    leading-5
                                                    text-slate-400
                                                "
                                            >
                                                Official payment details
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className="
                                            w-fit
                                            rounded-full
                                            bg-primary-50
                                            px-3
                                            py-1
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-wider
                                            text-primary-700
                                        "
                                    >
                                        Available
                                    </span>
                                </div>

                                <div
                                    className="
                                        mt-5
                                        rounded-xl
                                        bg-slate-50
                                        px-4
                                        py-3
                                    "
                                >
                                    <p
                                        className="
                                            text-[11px]
                                            font-medium
                                            text-slate-400
                                        "
                                    >
                                        Payment Name
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            break-words
                                            text-sm
                                            font-bold
                                            leading-6
                                            text-dark-900
                                        "
                                    >
                                        {PAYMENT_NAME}
                                    </p>
                                </div>

                                <div
                                    className="
                                        mt-3
                                        rounded-xl
                                        bg-slate-50
                                        px-4
                                        py-3
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-start
                                            justify-between
                                            gap-3
                                        "
                                    >
                                        <div className="min-w-0">
                                            <p
                                                className="
                                                    text-[11px]
                                                    font-medium
                                                    text-slate-400
                                                "
                                            >
                                                UPI ID
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    break-all
                                                    text-sm
                                                    font-semibold
                                                    leading-6
                                                    text-dark-900
                                                "
                                            >
                                                {UPI_ID}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleCopyUpi}
                                            aria-label="Copy UPI ID"
                                            title="Copy UPI ID"
                                            className="
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                border
                                                border-slate-200
                                                bg-white
                                                text-slate-500
                                                transition-all
                                                duration-200
                                                hover:border-primary-200
                                                hover:bg-primary-50
                                                hover:text-primary-700
                                                focus:outline-none
                                                focus-visible:ring-2
                                                focus-visible:ring-primary-700
                                            "
                                        >
                                            <Copy size={15} />
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-3
                                        rounded-xl
                                        border
                                        border-primary-100
                                        bg-primary-50/60
                                        px-4
                                        py-4
                                        text-center
                                    "
                                >
                                    <p
                                        className="
                                            text-xs
                                            font-medium
                                            text-primary-600
                                        "
                                    >
                                        UPI / GPay / PhonePe Number
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-xl
                                            font-extrabold
                                            tracking-wider
                                            text-primary-800

                                            sm:text-2xl
                                        "
                                    >
                                        {UPI_PHONE}
                                    </p>
                                </div>

                                <p
                                    className="
                                        mt-4
                                        flex
                                        items-start
                                        gap-2
                                        text-xs
                                        leading-5
                                        text-slate-400
                                    "
                                >
                                    <ShieldCheck
                                        size={14}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-primary-600
                                        "
                                    />

                                    Please verify the payment details
                                    directly with Abdullah Foundation
                                    before sending money.
                                </p>
                            </div>

                            <div
                                className="
                                    mt-5
                                    rounded-[1.5rem]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-sm

                                    sm:mt-6
                                    sm:rounded-[1.75rem]
                                    sm:p-6
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-primary-50
                                            text-primary-700
                                        "
                                    >
                                        <QrCode size={20} />
                                    </div>

                                    <div className="min-w-0">
                                        <h4
                                            className="
                                                text-sm
                                                font-bold
                                                text-dark-900
                                            "
                                        >
                                            UPI QR Code
                                        </h4>

                                        <p
                                            className="
                                                mt-0.5
                                                text-xs
                                                leading-5
                                                text-slate-400
                                            "
                                        >
                                            Scan to pay through a supported
                                            UPI app
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="
                                        mx-auto
                                        mt-6
                                        flex
                                        w-full
                                        max-w-[260px]
                                        items-center
                                        justify-center
                                        rounded-[1.5rem]
                                        border
                                        border-slate-200
                                        bg-white
                                        p-4
                                        shadow-sm

                                        sm:max-w-[280px]
                                    "
                                >
                                    <img
                                        src={upiQrImage}
                                        alt="UPI QR code for Abdullah Foundation Muzaffarnagar"
                                        className="
                                            block
                                            aspect-square
                                            h-auto
                                            w-full
                                            max-w-[240px]
                                            object-contain
                                        "
                                        loading="lazy"
                                    />
                                </div>

                                <div
                                    className="
                                        mt-5
                                        rounded-xl
                                        bg-slate-50
                                        px-4
                                        py-3
                                        text-center
                                    "
                                >
                                    <p
                                        className="
                                            text-[11px]
                                            font-medium
                                            text-slate-400
                                        "
                                    >
                                        Payment Recipient
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            break-words
                                            text-sm
                                            font-bold
                                            leading-6
                                            text-dark-900
                                        "
                                    >
                                        {PAYMENT_NAME}
                                    </p>
                                </div>

                                <p
                                    className="
                                        mt-4
                                        flex
                                        items-start
                                        gap-2
                                        text-xs
                                        leading-5
                                        text-slate-400
                                    "
                                >
                                    <ShieldCheck
                                        size={14}
                                        className="
                                            mt-0.5
                                            shrink-0
                                            text-primary-600
                                        "
                                    />

                                    Please confirm the recipient name and
                                    payment details in your UPI app before
                                    completing a payment.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-8
                        max-w-2xl
                        text-center

                        sm:mt-10
                    "
                >
                    <a
                        href={WHATSAPP_DONATE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group
                            inline-flex
                            max-w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-3
                            text-center
                            text-sm
                            font-semibold
                            leading-5
                            text-slate-700
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-accent-200
                            hover:text-accent-700
                            hover:shadow-md

                            sm:px-5
                        "
                    >
                        <Phone
                            size={16}
                            className="shrink-0 text-accent-500"
                        />

                        <span>
                            Contact us on WhatsApp
                        </span>

                        <ArrowRight
                            size={15}
                            className="
                                shrink-0
                                text-primary-700
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </a>
                </div>

            </Container>
        </section>
    );
}

export default Donation;
