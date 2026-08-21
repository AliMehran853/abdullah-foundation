import {
    ArrowUpRight,
    Heart,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import Container from "../ui/Container";

function Footer() {
    const quickLinks = [
        {
            label: "Home",
            href: "#home",
        },
        {
            label: "About",
            href: "#about",
        },
        {
            label: "Our Work",
            href: "#work",
        },
        {
            label: "Impact",
            href: "#impact",
        },
        {
            label: "Gallery",
            href: "#gallery",
        },
        {
            label: "Contact",
            href: "#contact",
        },
    ];

    return (
        <footer
            className="
                relative
                overflow-hidden
                border-t
                border-slate-800
                bg-slate-950
                text-white
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
                    top-0
                    h-80
                    w-80
                    rounded-full
                    bg-primary-900/30
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
                    h-80
                    w-80
                    rounded-full
                    bg-accent-900/20
                    blur-3xl
                "
            />

            <Container>

                {/* =================================================
                    Main Footer
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        grid
                        gap-12
                        py-14
                        sm:py-16
                        lg:grid-cols-[1.4fr_0.7fr_1fr]
                        lg:gap-16
                        lg:py-20
                    "
                >

                    {/* =================================================
                        Foundation
                    ================================================== */}

                    <div>

                        {/* Logo */}

                        <a
                            href="#home"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                group
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-primary-700
                                    text-sm
                                    font-extrabold
                                    tracking-tight
                                    text-white
                                    shadow-lg
                                    shadow-primary-950/20
                                    transition-all
                                    duration-300
                                    group-hover:-translate-y-1
                                    group-hover:bg-primary-600
                                "
                            >
                                AF
                            </div>

                            <div>

                                <h2
                                    className="
                                        text-base
                                        font-bold
                                        tracking-tight
                                        text-white
                                    "
                                >
                                    Abdullah Foundation
                                </h2>

                                <p
                                    className="
                                        mt-0.5
                                        text-xs
                                        text-slate-500
                                    "
                                >
                                    Education for Every Child
                                </p>

                            </div>

                        </a>

                        {/* Description */}

                        <p
                            className="
                                mt-6
                                max-w-md
                                text-sm
                                leading-7
                                text-slate-400
                            "
                        >
                            Creating opportunities for children through
                            education, digital skills, health awareness,
                            and compassionate support.
                        </p>

                        {/* Mission Quote */}

                        <div
                            className="
                                mt-7
                                flex
                                max-w-md
                                items-start
                                gap-3
                                rounded-2xl
                                border
                                border-slate-800
                                bg-white/[0.03]
                                px-4
                                py-4
                            "
                        >

                            <Heart
                                size={18}
                                className="
                                    mt-0.5
                                    shrink-0
                                    text-accent-500
                                "
                                fill="currentColor"
                            />

                            <p
                                className="
                                    text-xs
                                    leading-6
                                    text-slate-400
                                "
                            >
                                Every child deserves the opportunity
                                to learn, grow, and dream about a better
                                future.
                            </p>

                        </div>

                    </div>

                    {/* =================================================
                        Quick Links
                    ================================================== */}

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Explore
                        </h3>

                        <ul className="mt-5 space-y-3">

                            {quickLinks.map((link) => (
                                <li key={link.label}>

                                    <a
                                        href={link.href}
                                        className="
                                            group
                                            inline-flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-slate-400
                                            transition-colors
                                            duration-300
                                            hover:text-white
                                        "
                                    >

                                        <span>
                                            {link.label}
                                        </span>

                                        <ArrowUpRight
                                            size={14}
                                            className="
                                                opacity-0
                                                -translate-x-1
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-0
                                                group-hover:opacity-100
                                            "
                                        />

                                    </a>

                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* =================================================
                        Contact + CTA
                    ================================================== */}

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Get In Touch
                        </h3>

                        <div className="mt-5 space-y-4">

                            {/* Location */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                "
                            >

                                <MapPin
                                    size={18}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-accent-500
                                    "
                                />

                                <p
                                    className="
                                        text-sm
                                        leading-6
                                        text-slate-400
                                    "
                                >
                                    Tundla, Firozabad,
                                    <br />
                                    Uttar Pradesh, India
                                </p>

                            </div>

                            {/* Email */}

                            <a
                                href="mailto:abdullahfoundationtundla@gmail.com"
                                className="
                                    group
                                    flex
                                    items-start
                                    gap-3
                                "
                            >

                                <Mail
                                    size={18}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-accent-500
                                    "
                                />

                                <span
                                    className="
                                        break-all
                                        text-sm
                                        leading-6
                                        text-slate-400
                                        transition-colors
                                        duration-300
                                        group-hover:text-white
                                    "
                                >
                                    abdullahfoundationtundla@gmail.com
                                </span>

                            </a>

                            {/* Phone */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                "
                            >

                                <Phone
                                    size={18}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-accent-500
                                    "
                                />

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            text-slate-400
                                        "
                                    >
                                        Phone / WhatsApp
                                    </p>

                                    <span
                                        className="
                                            mt-1
                                            inline-flex
                                            rounded-full
                                            border
                                            border-slate-800
                                            bg-white/[0.03]
                                            px-2
                                            py-0.5
                                            text-[10px]
                                            font-semibold
                                            text-slate-500
                                        "
                                    >
                                        Coming Soon
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Donate */}

                        <a
                            href="#donate"
                            className="
                                group
                                mt-7
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-accent-500
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-white
                                shadow-lg
                                shadow-accent-950/20
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-accent-600
                                hover:shadow-xl
                            "
                        >

                            <Heart
                                size={17}
                                fill="currentColor"
                            />

                            Donate Now

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
                    Bottom Divider
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        border-t
                        border-slate-800
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            py-6
                            text-xs
                            text-slate-500

                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >

                        <p>
                            © 2026 Abdullah Foundation.
                            All rights reserved.
                        </p>

                        <p
                            className="
                                flex
                                items-center
                                gap-1.5
                            "
                        >
                            Made with

                            <Heart
                                size={13}
                                className="text-accent-500"
                                fill="currentColor"
                            />

                            for children.
                        </p>

                    </div>

                </div>

            </Container>
        </footer>
    );
}

export default Footer;