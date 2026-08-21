import {
    ArrowUpRight,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

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
                    eyebrow="Contact Us"
                    title="Let's Make A Difference Together"
                    description="Whether you want to support a child, volunteer, or learn more about our work, we'd love to hear from you."
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
                                    Your questions, ideas, and support can
                                    help us create better opportunities for
                                    children.
                                </p>

                                {/* =================================================
                                    Contact Details
                                ================================================== */}

                                <div className="mt-9 space-y-6">

                                    {/* Location */}

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
                                                Location
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    leading-6
                                                    text-white
                                                "
                                            >
                                                Tundla, Firozabad,
                                                Uttar Pradesh, India
                                            </p>
                                        </div>

                                    </div>

                                    {/* Email */}

                                    <a
                                        href="mailto:abdullahfoundationtundla@gmail.com"
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
                                                abdullahfoundationtundla@gmail.com
                                            </p>

                                        </div>

                                    </a>

                                    {/* WhatsApp */}

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
                                                Phone / WhatsApp
                                            </p>

                                            <div
                                                className="
                                                    mt-1
                                                    flex
                                                    items-center
                                                    gap-2
                                                "
                                            >
                                                <span
                                                    className="
                                                        text-sm
                                                        text-blue-100
                                                    "
                                                >
                                                    Available soon
                                                </span>

                                                <span
                                                    className="
                                                        rounded-full
                                                        bg-white/10
                                                        px-2
                                                        py-0.5
                                                        text-[10px]
                                                        font-semibold
                                                        text-orange-300
                                                    "
                                                >
                                                    Coming Soon
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* =================================================
                                    Availability
                                ================================================== */}

                                <div
                                    className="
                                        mt-10
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/10
                                        px-4
                                        py-3
                                        backdrop-blur-sm
                                    "
                                >

                                    <Clock3
                                        size={18}
                                        className="shrink-0 text-orange-300"
                                    />

                                    <div>

                                        <p
                                            className="
                                                text-xs
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            Contact information
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                text-[11px]
                                                text-blue-200
                                            "
                                        >
                                            Additional contact details will
                                            be added soon.
                                        </p>

                                    </div>

                                </div>

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
                                    We are preparing more ways for supporters
                                    and volunteers to connect with us.
                                </p>

                            </div>

                            {/* =================================================
                                Contact Actions
                            ================================================== */}

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                {/* Email */}

                                <a
                                    href="mailto:abdullahfoundationtundla@gmail.com"
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
                                        abdullahfoundationtundla@gmail.com
                                    </p>

                                </a>

                                {/* WhatsApp */}

                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        p-5
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
                                        "
                                    >
                                        <Phone size={20} />
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

                                        <span
                                            className="
                                                rounded-full
                                                bg-accent-50
                                                px-2
                                                py-0.5
                                                text-[10px]
                                                font-semibold
                                                text-accent-600
                                            "
                                        >
                                            Soon
                                        </span>

                                    </div>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        Contact number will be added soon.
                                    </p>

                                </div>

                            </div>

                            {/* =================================================
                                Location Card
                            ================================================== */}

                            <div
                                className="
                                    relative
                                    mt-5
                                    min-h-[230px]
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
                                        min-h-[230px]
                                        items-center
                                        justify-center
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
                                            Tundla, Uttar Pradesh
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            Interactive map will be added
                                            here.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* =================================================
                                Future Contact Form
                            ================================================== */}

                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-dashed
                                    border-slate-200
                                    bg-slate-50
                                    p-4
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
                                        text-primary-700
                                        shadow-sm
                                    "
                                >
                                    <Send size={17} />
                                </div>

                                <div className="min-w-0">

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-dark-900
                                        "
                                    >
                                        Contact form
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                                    >
                                        A direct message form will be
                                        available in a future update.
                                    </p>

                                </div>

                            </div>

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
                        us move one step closer to a better future for
                        children.
                    </p>
                </div>

            </Container>
        </section>
    );
}

export default Contact;