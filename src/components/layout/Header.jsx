import {
    useEffect,
    useState,
} from "react";

import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import {
    Menu,
    X,
    Heart,
} from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { navigation } from "../../data/navigation";

import logo from "../../assets/logo/abdullah-foundation-logo.png";

const WHATSAPP_DONATE_URL =
    "https://wa.me/917088091108";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] =
        useState(false);

    const [activeSection, setActiveSection] =
        useState(
            location.pathname === "/"
                ? "home"
                : ""
        );

    /* =========================================================
       Close Mobile Menu
    ========================================================== */

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    /* =========================================================
       Scroll To Section
    ========================================================== */

    const scrollToSection = (sectionId) => {
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

    /* =========================================================
       Handle Home + Section Navigation
    ========================================================== */

    const handleSectionNavigation = (
        event,
        item
    ) => {
        event.preventDefault();

        closeMenu();
        setActiveSection(item.id);

        /* Already on Home */
        if (location.pathname === "/") {
            scrollToSection(item.id);
            return;
        }

        /* Coming from another page */
        navigate(`/#${item.id}`);
    };

    /* =========================================================
       Detect Active Section
    ========================================================== */

    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveSection("");
            return;
        }

        const handleScroll = () => {
            const headerOffset = 120;

            let currentSection = "home";

            navigation.forEach((item) => {
                const section =
                    document.getElementById(item.id);

                if (!section) return;

                const sectionTop =
                    section.getBoundingClientRect().top;

                if (sectionTop <= headerOffset) {
                    currentSection = item.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, [location.pathname]);

    /* =========================================================
       Handle Target Hash After Returning To Home
    ========================================================== */

    useEffect(() => {
        if (
            location.pathname !== "/" ||
            !location.hash
        ) {
            return;
        }

        const sectionId =
            location.hash.substring(1);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollToSection(sectionId);
            });
        });
    }, [
        location.pathname,
        location.hash,
    ]);

    return (
        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-slate-200/80
                bg-white/95
                backdrop-blur-md
            "
        >
            <Container>

                <div className="flex h-18 items-center justify-between">

                    {/* Logo */}

                    <Link
                        to="/"
                        onClick={() => {
                            closeMenu();
                            setActiveSection("home");
                        }}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <div
                            className="
                                flex
                                h-11
                                w-auto
                                shrink-0
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-md
                                border
                                border-slate-200
                                bg-white
                                shadow-sm
                                transition-all
                                duration-300
                                group-hover:scale-105
                                group-hover:shadow-md
                            "
                        >
                            <img
                                src={logo}
                                alt="Abdullah Foundation"
                                className="
                                    h-11
                                    w-11
                                    object-contain
                                "
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}

                    <nav
                        aria-label="Main navigation"
                        className="
                            hidden
                            items-center
                            gap-7
                            lg:flex
                        "
                    >
                        {navigation.map((item) => {
                            const isActive =
                                activeSection === item.id;

                            return (
                                <Link
                                    key={item.id}
                                    to={`/#${item.id}`}
                                    onClick={(event) =>
                                        handleSectionNavigation(
                                            event,
                                            item
                                        )
                                    }
                                    aria-current={
                                        isActive
                                            ? "location"
                                            : undefined
                                    }
                                    className={`
                                        relative
                                        py-2
                                        text-sm
                                        font-medium
                                        transition-colors
                                        duration-300

                                        ${
                                            isActive
                                                ? "text-primary-700"
                                                : "text-slate-700 hover:text-primary-700"
                                        }

                                        after:absolute
                                        after:bottom-0
                                        after:left-1/2
                                        after:h-0.5
                                        after:-translate-x-1/2
                                        after:bg-accent-500
                                        after:transition-all
                                        after:duration-300

                                        ${
                                            isActive
                                                ? "after:w-full"
                                                : "after:w-0 hover:after:w-full"
                                        }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Donate */}

                    <div className="hidden lg:block">
                        <Button
                            href={WHATSAPP_DONATE_URL}
                            variant="accent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Heart size={17} />

                            Donate Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        onClick={() =>
                            setIsMenuOpen(
                                (prev) => !prev
                            )
                        }
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            text-slate-700
                            transition-all
                            duration-200
                            hover:bg-slate-100
                            hover:text-primary-700
                            focus:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-primary-700
                            lg:hidden
                        "
                    >
                        {isMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>

                </div>
            </Container>

            {/* Mobile Navigation */}

            <div
                className={`
                    overflow-hidden
                    border-t
                    border-slate-100
                    bg-white
                    transition-all
                    duration-300
                    lg:hidden

                    ${
                        isMenuOpen
                            ? "max-h-[700px] opacity-100"
                            : "max-h-0 opacity-0"
                    }
                `}
            >
                <Container>

                    <nav
                        aria-label="Mobile navigation"
                        className="
                            flex
                            flex-col
                            py-4
                        "
                    >
                        {navigation.map((item) => {
                            const isActive =
                                activeSection === item.id;

                            return (
                                <Link
                                    key={item.id}
                                    to={`/#${item.id}`}
                                    onClick={(event) =>
                                        handleSectionNavigation(
                                            event,
                                            item
                                        )
                                    }
                                    aria-current={
                                        isActive
                                            ? "location"
                                            : undefined
                                    }
                                    className={`
                                        relative
                                        rounded-lg
                                        px-3
                                        py-3
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-200

                                        ${
                                            isActive
                                                ? "bg-primary-50 text-primary-700"
                                                : "text-slate-700 hover:bg-slate-50 hover:text-primary-700"
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-2">

                                        {isActive && (
                                            <span
                                                className="
                                                    h-1.5
                                                    w-1.5
                                                    rounded-full
                                                    bg-accent-500
                                                "
                                            />
                                        )}

                                        {item.label}

                                    </span>
                                </Link>
                            );
                        })}

                        {/* Mobile Donate */}

                        <div
                            className="
                                mt-3
                                border-t
                                border-slate-100
                                pt-4
                            "
                        >
                            <Button
                                href={WHATSAPP_DONATE_URL}
                                variant="accent"
                                className="w-full"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                <Heart size={17} />

                                Donate Now
                            </Button>
                        </div>

                    </nav>
                </Container>
            </div>
        </header>
    );
}

export default Header;