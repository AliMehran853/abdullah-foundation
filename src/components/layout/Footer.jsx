import {
    ArrowUpRight,
    Heart,
    Link as LinkIcon,
    MapPin,
    Phone,
} from "lucide-react";

import Container from "../ui/Container";

import {
    Link,
    useLocation,
} from "react-router-dom";


const WHATSAPP_DONATE_URL =
    "https://wa.me/917088091108";

const OFFICIAL_WEBSITE_URL =
    "https://sites.google.com/view/abdullah-foundation/home";

const UPI_PHONE = "7088091108";


function Footer() {

    const location = useLocation();


    const quickLinks = [
        {
            label: "Home",
            href: "/#home",
            sectionId: "home",
        },

        {
            label: "About",
            href: "/#about",
            sectionId: "about",
        },

        {
            label: "Our Work",
            href: "/#work",
            sectionId: "work",
        },

        {
            label: "7 Karyas",
            href: "/#karyas",
            sectionId: "karyas",
        },

        {
            label: "Impact",
            href: "/#impact",
            sectionId: "impact",
        },

        {
            label: "Gallery",
            href: "/#gallery",
            sectionId: "gallery",
        },

        {
            label: "Donate",
            href: "/#donate",
            sectionId: "donate",
        },

        {
            label: "Contact",
            href: "/#contact",
            sectionId: "contact",
        },
    ];


    const legalLinks = [
        {
            label: "Privacy Policy",
            href: "/privacy-policy",
        },

        {
            label: "Terms of Service",
            href: "/terms-of-service",
        },

        {
            label: "Transparency & Accountability",
            href: "/transparency",
        },

        {
            label: "Authorization Notice",
            href: "/authorization-notice",
        },
    ];


    const handleSectionClick = (
        event,
        sectionId
    ) => {

        if (location.pathname !== "/") {
            return;
        }


        event.preventDefault();


        const section =
            document.getElementById(sectionId);


        if (!section) return;


        requestAnimationFrame(() => {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        });

    };


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

            {/* =================================================
                Decorative Background
            ================================================== */}

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

                <div
                    className="
                        relative
                        z-10
                        grid
                        gap-12
                        py-14

                        sm:py-16

                        lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr]
                        lg:gap-12
                        lg:py-20
                    "
                >

                    {/* =================================================
                        Foundation
                    ================================================== */}

                    <div>

                        <a
                            href="/#home"
                            onClick={(event) =>
                                handleSectionClick(
                                    event,
                                    "home"
                                )
                            }
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
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
                                    Serving Humanity
                                </p>

                            </div>

                        </a>


                        <p
                            className="
                                mt-6
                                max-w-md
                                text-sm
                                leading-7
                                text-slate-400
                            "
                        >
                            Abdullah Foundation works to support
                            underprivileged children and families
                            through free education, food, shelter,
                            healthcare, skills, and compassionate care.
                        </p>


                        <p
                            className="
                                mt-4
                                text-sm
                                font-semibold
                                text-slate-300
                            "
                        >
                            Founded by{" "}

                            <span className="text-white">
                                Shahadat Faridi
                            </span>
                        </p>


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
                                Free Education, Food & Shelter
                                for 150+ underprivileged children.
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
                                        onClick={(event) =>
                                            handleSectionClick(
                                                event,
                                                link.sectionId
                                            )
                                        }
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
                        Legal Links
                    ================================================== */}

                    <div>

                        <h3
                            className="
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            Legal
                        </h3>


                        <ul className="mt-5 space-y-3">

                            {legalLinks.map((link) => (

                                <li key={link.href}>

                                    <Link
                                        to={link.href}
                                        className="
                                            group
                                            inline-flex
                                            max-w-full
                                            items-start
                                            gap-2
                                            text-sm
                                            leading-5
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
                                                mt-0.5
                                                shrink-0
                                                opacity-0
                                                -translate-x-1
                                                transition-all
                                                duration-300
                                                group-hover:translate-x-0
                                                group-hover:opacity-100
                                            "
                                        />

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>


                    {/* =================================================
                        Contact
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

                            {/* Official Website */}

                            <a
                                href={OFFICIAL_WEBSITE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex
                                    items-start
                                    gap-3
                                "
                            >

                                <LinkIcon
                                    size={18}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-accent-500
                                    "
                                />


                                <div className="min-w-0">

                                    <p
                                        className="
                                            text-sm
                                            text-slate-400
                                            transition-colors
                                            duration-300
                                            group-hover:text-white
                                        "
                                    >
                                        Official Website
                                    </p>


                                    <span
                                        className="
                                            mt-1
                                            block
                                            break-all
                                            text-xs
                                            leading-5
                                            text-slate-500
                                            transition-colors
                                            duration-300
                                            group-hover:text-slate-300
                                        "
                                    >
                                        sites.google.com/view/abdullah-foundation/home
                                    </span>

                                </div>

                            </a>


                            {/* Main Location */}

                            <div className="flex items-start gap-3">

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

                                    <span className="font-semibold text-slate-300">
                                        Muzaffarnagar, UP
                                    </span>{" "}

                                    <span className="text-slate-500">
                                        (Main Branch)
                                    </span>

                                    <br />

                                    Tundla, Firozabad

                                    <br />

                                    Uttar Pradesh, India

                                </p>

                            </div>


                            {/* WhatsApp */}

                            <a
                                href={WHATSAPP_DONATE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
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
                                            transition-colors
                                            duration-300
                                            group-hover:text-white
                                        "
                                    >
                                        WhatsApp / Donate
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
                                            text-slate-400
                                        "
                                    >
                                        +91 7088091108
                                    </span>

                                </div>

                            </a>


                            {/* UPI */}

                            <div className="flex items-start gap-3">

                                <Heart
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
                                        UPI / GPay / PhonePe
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
                                            text-slate-400
                                        "
                                    >
                                        {UPI_PHONE}
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Donate */}

                        <a
                            href={WHATSAPP_DONATE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
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

                            for humanity.
                        </p>

                    </div>

                </div>

            </Container>

        </footer>
    );
}


export default Footer;
