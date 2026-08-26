import {
    ArrowUpRight,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const WHATSAPP_URL =
    "https://wa.me/917088091108?text=Assalamu%20Alaikum%2C%20I%20want%20to%20donate%20to%20Abdullah%20Foundation";

const PHONE_NUMBER = "+91 7088091108";

const OFFICIAL_EMAIL =
    "abdullahfoundationmzn@gmail.com";

function Contact() {
    return (
        <section
            id="contact"
            className="
                relative
                isolate
                overflow-hidden
                bg-slate-50
                py-20
                sm:py-24
                lg:py-28
            "
        >
            {/* =====================================================
                Decorative Background
            ====================================================== */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-20
                    -z-10
                    h-80
                    w-80
                    rounded-full
                    bg-primary-100/50
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -right-32
                    -z-10
                    h-96
                    w-96
                    rounded-full
                    bg-accent-100/40
                    blur-3xl
                "
            />

            <Container>

                {/* =================================================
                    Section Heading
                ================================================== */}

                <SectionTitle
                    eyebrow="Contact Abdullah Foundation"
                    title="Let's Make A Difference Together"
                    description="Whether you want to support the foundation, ask about our work, or learn how to help, reach out to us directly."
                />

                {/* =================================================
                    Main Contact Card
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
                        shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                    "
                >
                    <div className="grid lg:grid-cols-[0.82fr_1.18fr]">

                        {/* =================================================
                            LEFT SIDE
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
                            "
                        >

                            {/* Decorative Circle */}

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-white/10
                                "
                            />

                            <div
                                aria-hidden="true"
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-32
                                    -left-20
                                    h-72
                                    w-72
                                    rounded-full
                                    bg-accent-500/20
                                    blur-2xl
                                "
                            />

                            <div className="relative z-10">

                                {/* Icon */}

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-white/10
                                        text-orange-300
                                        backdrop-blur-sm
                                    "
                                >
                                    <MessageCircle size={22} />
                                </div>

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
                                    Get In Touch
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        text-3xl
                                        font-bold
                                        leading-tight
                                        sm:text-4xl
                                    "
                                >
                                    We'd love to
                                    <span className="block text-orange-300">
                                        hear from you.
                                    </span>
                                </h3>

                                <p
                                    className="
                                        mt-5
                                        max-w-md
                                        text-sm
                                        leading-7
                                        text-blue-100
                                        sm:text-base
                                    "
                                >
                                    Connect with Abdullah Foundation to
                                    learn more about our work, support our
                                    mission, or discuss how you can help.
                                </p>

                                {/* =================================================
                                    Contact Details
                                ================================================== */}

                                <div className="mt-9 space-y-6">

                                    {/* Main Location */}

                                    <div className="flex gap-4">

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
                                            <MapPin size={19} />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-xs
                                                    font-semibold
                                                    text-blue-200
                                                "
                                            >
                                                Main Branch
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    leading-6
                                                    text-white
                                                "
                                            >
                                                Muzaffarnagar,
                                                Uttar Pradesh - 251001,
                                                India
                                            </p>
                                        </div>

                                    </div>

                                    {/* Second Location */}

                                    <div className="flex gap-4">

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
                                            <MapPin size={19} />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-xs
                                                    font-semibold
                                                    text-blue-200
                                                "
                                            >
                                                Other Location
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    leading-6
                                                    text-white
                                                "
                                            >
                                                Tundla, Firozabad
                                                <br />
                                                Uttar Pradesh, India
                                            </p>
                                        </div>

                                    </div>

                                    {/* Email */}

                                    <a
                                        href={`mailto:${OFFICIAL_EMAIL}`}
                                        className="
                                            group
                                            flex
                                            gap-4
                                        "
                                    >
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
                                                transition-colors
                                                duration-300
                                                group-hover:bg-white/20
                                            "
                                        >
                                            <Mail size={19} />
                                        </div>

                                        <div className="min-w-0">

                                            <p
                                                className="
                                                    text-xs
                                                    font-semibold
                                                    text-blue-200
                                                "
                                            >
                                                Email
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    break-all
                                                    text-sm
                                                    text-white
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-orange-300
                                                "
                                            >
                                                {OFFICIAL_EMAIL}
                                            </p>

                                        </div>
                                    </a>

                                    {/* WhatsApp */}

                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group
                                            flex
                                            gap-4
                                        "
                                    >
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
                                                transition-colors
                                                duration-300
                                                group-hover:bg-white/20
                                            "
                                        >
                                            <Phone size={19} />
                                        </div>

                                        <div>

                                            <p
                                                className="
                                                    text-xs
                                                    font-semibold
                                                    text-blue-200
                                                "
                                            >
                                                WhatsApp / Phone
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    text-white
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-orange-300
                                                "
                                            >
                                                {PHONE_NUMBER}
                                            </p>

                                        </div>
                                    </a>

                                </div>

                                {/* =================================================
                                    WhatsApp CTA
                                ================================================== */}

                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group
                                        mt-10
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-white
                                        px-5
                                        py-3
                                        text-sm
                                        font-bold
                                        text-primary-700
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:shadow-xl
                                    "
                                >
                                    <MessageCircle size={17} />

                                    Chat on WhatsApp

                                    <ArrowUpRight
                                        size={16}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                        "
                                    />
                                </a>

                            </div>
                        </div>

                        {/* =================================================
                            RIGHT SIDE
                        ================================================== */}

                        <div className="bg-white p-7 sm:p-10 lg:p-12">

                            <div>

                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-primary-700
                                    "
                                >
                                    Abdullah Foundation
                                </p>

                                <h3
                                    className="
                                        mt-3
                                        text-2xl
                                        font-bold
                                        leading-tight
                                        text-dark-900
                                        sm:text-3xl
                                    "
                                >
                                    Connect with our team
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        max-w-lg
                                        text-sm
                                        leading-7
                                        text-slate-500
                                        sm:text-base
                                    "
                                >
                                    For donations, questions, or general
                                    enquiries, WhatsApp is the quickest way
                                    to reach the foundation.
                                </p>

                            </div>

                            {/* =================================================
                                Contact Actions
                            ================================================== */}

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                {/* Email */}

                                <a
                                    href={`mailto:${OFFICIAL_EMAIL}`}
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        p-5
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-primary-100
                                        hover:bg-primary-50/50
                                        hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-white
                                            text-primary-700
                                            shadow-sm
                                            transition-transform
                                            duration-300
                                            group-hover:scale-105
                                        "
                                    >
                                        <Mail size={20} />
                                    </div>

                                    <div className="mt-4 flex items-center gap-2">

                                        <h4
                                            className="
                                                text-sm
                                                font-bold
                                                text-dark-900
                                            "
                                        >
                                            Email Us
                                        </h4>

                                        <ArrowUpRight
                                            size={15}
                                            className="
                                                text-slate-400
                                                transition-transform
                                                duration-300
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                            "
                                        />

                                    </div>

                                    <p
                                        className="
                                            mt-2
                                            break-all
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        {OFFICIAL_EMAIL}
                                    </p>

                                </a>

                                {/* WhatsApp */}

                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-accent-200
                                        bg-accent-50/40
                                        p-5
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-accent-300
                                        hover:bg-accent-50
                                        hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-white
                                            text-accent-600
                                            shadow-sm
                                            transition-transform
                                            duration-300
                                            group-hover:scale-105
                                        "
                                    >
                                        <MessageCircle size={20} />
                                    </div>

                                    <div className="mt-4 flex items-center gap-2">

                                        <h4
                                            className="
                                                text-sm
                                                font-bold
                                                text-dark-900
                                            "
                                        >
                                            WhatsApp
                                        </h4>

                                        <ArrowUpRight
                                            size={15}
                                            className="
                                                text-slate-400
                                                transition-transform
                                                duration-300
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                            "
                                        />

                                    </div>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        {PHONE_NUMBER}
                                    </p>

                                </a>

                            </div>

                            {/* =================================================
                                Location Card
                            ================================================== */}

                            <div
                                className="
                                    relative
                                    mt-5
                                    min-h-[250px]
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-100
                                "
                            >

                                {/* Map Pattern */}

                                <div
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        inset-0
                                        opacity-40
                                        [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)]
                                        [background-size:32px_32px]
                                    "
                                />

                                {/* Gradient */}

                                <div
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        from-primary-50/70
                                        via-transparent
                                        to-accent-50/60
                                    "
                                />

                                <div
                                    className="
                                        relative
                                        flex
                                        min-h-[250px]
                                        items-center
                                        justify-center
                                        px-6
                                    "
                                >
                                    <div className="text-center">

                                        <div
                                            className="
                                                mx-auto
                                                flex
                                                h-14
                                                w-14
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-primary-700
                                                text-white
                                                shadow-xl
                                                ring-8
                                                ring-primary-700/10
                                            "
                                        >
                                            <MapPin size={25} />
                                        </div>

                                        <p
                                            className="
                                                mt-4
                                                text-sm
                                                font-bold
                                                text-dark-900
                                            "
                                        >
                                            Muzaffarnagar, Uttar Pradesh
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                leading-5
                                                text-slate-500
                                            "
                                        >
                                            Main Branch • 251001, India
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            Tundla, Firozabad
                                        </p>

                                    </div>
                                </div>
                            </div>

                            {/* =================================================
                                WhatsApp Contact Banner
                            ================================================== */}

                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    mt-5
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-accent-100
                                    bg-accent-50/50
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-accent-200
                                    hover:bg-accent-50
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-white
                                        text-accent-600
                                        shadow-sm
                                    "
                                >
                                    <MessageCircle size={17} />
                                </div>

                                <div className="min-w-0 flex-1">

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-dark-900
                                        "
                                    >
                                        Need more information?
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        Message Abdullah Foundation on
                                        WhatsApp.
                                    </p>

                                </div>

                                <ArrowUpRight
                                    size={17}
                                    className="
                                        shrink-0
                                        text-accent-600
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-0.5
                                        group-hover:translate-x-0.5
                                    "
                                />
                            </a>

                        </div>
                    </div>
                </div>

                {/* =================================================
                    Bottom Message
                ================================================== */}

                <div
                    className="
                        mx-auto
                        mt-10
                        max-w-2xl
                        text-center
                    "
                >
                    <p
                        className="
                            text-sm
                            leading-7
                            text-slate-500
                            sm:text-base
                        "
                    >
                        Every message, volunteer, and contribution can help
                        move us one step closer to a better future for
                        children and families.
                    </p>
                </div>

            </Container>
        </section>
    );
}

export default Contact;
