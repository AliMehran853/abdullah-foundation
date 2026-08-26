import {
    ArrowRight,
    Heart,
    GraduationCap,
    Users,
    MapPin,
} from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

import heroImage from "../../assets/images/hero.webp";

const WHATSAPP_DONATE_URL =
    "https://wa.me/917088091108?text=Assalamu%20Alaikum%2C%20I%20want%20to%20donate%20to%20Abdullah%20Foundation";

function Hero() {
    return (
        <section
            id="home"
            className="
                relative
                overflow-hidden
                bg-white
                pt-12
                pb-20

                sm:pt-16
                sm:pb-24

                lg:pt-20
                lg:pb-28
            "
        >
            {/* =====================================================
                Decorative Background Elements
            ====================================================== */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    -top-40
                    h-96
                    w-96
                    rounded-full
                    bg-primary-50
                    blur-3xl
                    opacity-70
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-96
                    w-96
                    rounded-full
                    bg-accent-50
                    blur-3xl
                    opacity-70
                "
            />

            <Container>
                <div
                    className="
                        relative
                        grid
                        items-center
                        gap-12

                        lg:grid-cols-2
                        lg:gap-16
                    "
                >
                    {/* =================================================
                        Hero Content
                    ================================================== */}

                    <div className="relative z-10 max-w-2xl">

                        {/* Eyebrow */}

                        <div
                            className="
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-primary-100
                                bg-primary-50
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-primary-700
                            "
                        >
                            <GraduationCap size={17} />

                            <span>
                                Abdullah Foundation
                            </span>
                        </div>

                        {/* Main Heading */}

                        <h1
                            className="
                                max-w-3xl
                                text-4xl
                                font-bold
                                leading-[1.08]
                                tracking-tight
                                text-dark-900

                                sm:text-5xl

                                lg:text-6xl
                                xl:text-7xl
                            "
                        >
                            Give Education,

                            <span
                                className="
                                    block
                                    text-primary-700
                                "
                            >
                                Give Future.
                            </span>
                        </h1>

                        {/* Description */}

                        <p
                            className="
                                mt-6
                                max-w-xl
                                text-base
                                leading-8
                                text-slate-600

                                sm:text-lg
                            "
                        >
                            Abdullah Foundation is committed to serving
                            underprivileged children and families through
                            free education, food, shelter, healthcare,
                            skills, and compassionate support.
                        </p>

                        {/* Buttons */}

                        <div
                            className="
                                mt-8
                                flex
                                flex-col
                                gap-3

                                sm:flex-row
                            "
                        >
                            <Button
                                href={WHATSAPP_DONATE_URL}
                                variant="accent"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Heart
                                    size={17}
                                    fill="currentColor"
                                />

                                Donate Now
                            </Button>

                            <Button
                                href="#work"
                                variant="outline"
                            >
                                Our Work

                                <ArrowRight size={17} />
                            </Button>
                        </div>

                        {/* Trust Indicators */}

                        <div
                            className="
                                mt-9
                                flex
                                flex-wrap
                                items-center
                                gap-x-6
                                gap-y-4
                                border-t
                                border-slate-100
                                pt-6
                            "
                        >
                            <div className="flex items-center gap-2.5">

                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-primary-50
                                        text-primary-700
                                    "
                                >
                                    <Users size={17} />
                                </div>

                                <div>
                                    <p
                                        className="
                                            text-sm
                                            font-bold
                                            text-dark-900
                                        "
                                    >
                                        150+
                                    </p>

                                    <p
                                        className="
                                            text-xs
                                            text-slate-500
                                        "
                                    >
                                        Poor Children
                                    </p>
                                </div>
                            </div>

                            <div
                                className="
                                    hidden
                                    h-8
                                    w-px
                                    bg-slate-200

                                    sm:block
                                "
                            />

                            <div className="flex items-center gap-2.5">

                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-accent-50
                                        text-accent-600
                                    "
                                >
                                    <MapPin size={17} />
                                </div>

                                <div>
                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-dark-900
                                        "
                                    >
                                        Muzaffarnagar, UP
                                    </p>

                                    <p
                                        className="
                                            text-xs
                                            text-slate-500
                                        "
                                    >
                                        Main Branch • Tundla, Firozabad
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        Hero Image / Banner
                    ================================================== */}

                    <div className="relative">

                        {/* Decorative Shape */}

                        <div
                            aria-hidden="true"
                            className="
                                absolute
                                -right-3
                                -top-3
                                h-24
                                w-24
                                rounded-3xl
                                bg-accent-500/10

                                sm:-right-5
                                sm:-top-5
                                sm:h-32
                                sm:w-32
                            "
                        />

                        <div
                            aria-hidden="true"
                            className="
                                absolute
                                -bottom-5
                                -left-5
                                h-32
                                w-32
                                rounded-full
                                bg-primary-500/10
                                blur-2xl

                                sm:-bottom-7
                                sm:-left-7
                                sm:h-40
                                sm:w-40
                            "
                        />

                        {/* =================================================
                            Banner Frame
                        ================================================== */}

                        <div
                            className="
                                relative
                                z-10
                                aspect-square
                                w-full
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-slate-200
                                bg-white
                                shadow-[0_25px_70px_rgba(15,23,42,0.14)]
                            "
                        >
                            <img
                                src={heroImage}
                                alt="Abdullah Foundation banner"
                                loading="eager"
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    rounded-[2rem]
                                    object-cover
                                    object-center

                                    transition-transform
                                    duration-700
                                    ease-out

                                    hover:scale-[1.01]
                                "
                            />
                        </div>

                        {/* =================================================
                            Floating Impact Card
                        ================================================== */}

                        <div
                            className="
                                absolute
                                -bottom-5
                                left-4
                                z-20
                                flex
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                border-white/90
                                bg-white
                                px-4
                                py-3
                                shadow-[0_15px_40px_rgba(15,23,42,0.14)]

                                transition-transform
                                duration-300

                                hover:-translate-y-1

                                sm:-bottom-6
                                sm:left-6
                                sm:px-5
                                sm:py-4
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
                                <Heart
                                    size={20}
                                    fill="currentColor"
                                />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-sm
                                        font-bold
                                        text-dark-900
                                    "
                                >
                                    Every child matters
                                </p>

                                <p
                                    className="
                                        mt-0.5
                                        text-xs
                                        text-slate-500
                                    "
                                >
                                    Education, care, and hope.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
