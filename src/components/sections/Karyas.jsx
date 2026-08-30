import {
    Heart,
    Home,
    Utensils,
    Shirt,
    Pill,
    GraduationCap,
    HandHeart,
    Accessibility,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import karya1 from "../../assets/poster/1.webp";
import karya2 from "../../assets/poster/2.webp";
import karya3 from "../../assets/poster/3.webp";
import karya4 from "../../assets/poster/4.webp";
import karya5 from "../../assets/poster/5.webp";
import karya6 from "../../assets/poster/6.webp";
import karya7 from "../../assets/poster/7.webp";

const karyas = [
    {
        id: 1,
        image: karya1,
        title: "Education Service",
        seva: "TALEEM SEVA",
        description:
            "Free Education for Underprivileged Children",
        icon: GraduationCap,
        alt: "Karya 1 - Taleem Seva - Education Service - Free Education for Underprivileged Children",
    },

    {
        id: 2,
        image: karya2,
        title: "Bhojan Seva",
        seva: "BHOJAN SEVA",
        description:
            "Serving Meals to the Hungry with Dignity & Compassion",
        icon: Utensils,
        alt: "Karya 2 - Bhojan Seva - Serving Meals to the Hungry with Dignity and Compassion",
    },

    {
        id: 3,
        image: karya3,
        title: "Clothing Service",
        seva: "KAPDA SEVA",
        description:
            "Providing Clothes to the Needy with Dignity",
        icon: Shirt,
        alt: "Karya 3 - Kapda Seva - Clothing Service - Providing Clothes to the Needy with Dignity",
    },

    {
        id: 4,
        image: karya4,
        title: "Medical Service",
        seva: "ILAAJ SEVA",
        description:
            "Free Healthcare & Medicine for the Poor",
        icon: Pill,
        alt: "Karya 4 - Ilaaj Seva - Medical Service - Free Healthcare and Medicine for the Poor",
    },

    {
        id: 5,
        image: karya5,
        title: "Shelter Service",
        seva: "BEGHARON KO GHAR",
        description:
            "Providing Homes for the Homeless",
        icon: Home,
        alt: "Karya 5 - Begharon Ko Ghar - Shelter Service - Providing Homes for the Homeless",
    },

    {
        id: 6,
        image: karya6,
        title: "Marriage Support",
        seva: "BETIYON KI SHAADI",
        description:
            "Assisting Poor Daughters in Marriage",
        icon: HandHeart,
        alt: "Karya 6 - Betiyon Ki Shaadi - Marriage Support - Assisting Poor Daughters in Marriage",
    },

    {
        id: 7,
        image: karya7,
        title: "Disability Support",
        seva: "VIKLANG SEVA",
        description:
            "Special Facilities for Persons with Disabilities",
        icon: Accessibility,
        alt: "Karya 7 - Viklang Seva - Disability Support - Special Facilities for Persons with Disabilities",
    },
];

function Karyas() {
    return (
        <section
            id="karyas"
            className="
                relative
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
                    top-10
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
                    -right-40
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-accent-100/50
                    blur-3xl
                "
            />

            <Container>

                {/* =================================================
                    Section Heading
                ================================================== */}

                <SectionTitle
                    eyebrow="7 Seva Karyas"
                    title="Serving People With Care And Dignity"
                    description="Abdullah Foundation serves the community through seven areas of support, helping people with essential needs, education, healthcare, shelter, and compassionate care."
                />

                {/* =================================================
                    Karyas Grid
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-12
                        grid
                        max-w-6xl
                        grid-cols-1
                        gap-6

                        sm:grid-cols-2
                        sm:gap-7

                        lg:grid-cols-3
                        lg:gap-8
                    "
                >
                    {karyas.map(
                        ({
                            id,
                            image,
                            title,
                            seva,
                            description,
                            icon: Icon,
                            alt,
                        }) => (
                            <article
                                key={id}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[1.5rem]
                                    border
                                    border-slate-200
                                    bg-white
                                    shadow-[0_18px_45px_rgba(15,23,42,0.07)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1.5
                                    hover:shadow-[0_25px_60px_rgba(15,23,42,0.11)]

                                    sm:rounded-[1.75rem]
                                "
                            >

                                {/* =================================================
                                    Poster
                                ================================================== */}

                                <div
                                    className="
                                        relative
                                        w-full
                                        overflow-hidden
                                        bg-slate-100
                                    "
                                >
                                    <img
                                        src={image}
                                        alt={alt}
                                        loading={
                                            id === 1
                                                ? "eager"
                                                : "lazy"
                                        }
                                        className="
                                            block
                                            h-auto
                                            w-full
                                            object-contain
                                            transition-transform
                                            duration-700
                                            ease-out
                                            group-hover:scale-[1.015]
                                        "
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-slate-950/10
                                            via-transparent
                                            to-transparent
                                            opacity-0
                                            transition-opacity
                                            duration-500
                                            group-hover:opacity-100
                                        "
                                    />
                                </div>

                                {/* =================================================
                                    Karya Information
                                ================================================== */}

                                <div
                                    className="
                                        border-t
                                        border-slate-100
                                        bg-white
                                        px-4
                                        py-4

                                        sm:px-5
                                        sm:py-5
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
                                                bg-primary-50
                                                text-primary-700
                                                transition-transform
                                                duration-300
                                                group-hover:scale-105
                                            "
                                        >
                                            <Icon size={19} />
                                        </div>

                                        <div className="min-w-0 flex-1">

                                            <p
                                                className="
                                                    text-[11px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.08em]
                                                    text-primary-700
                                                "
                                            >
                                                Karya {id}
                                            </p>

                                            <h3
                                                className="
                                                    mt-1
                                                    text-sm
                                                    font-bold
                                                    text-slate-900

                                                    sm:text-base
                                                "
                                            >
                                                {title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-1
                                                    text-xs
                                                    leading-5
                                                    text-slate-500

                                                    sm:text-sm
                                                    sm:leading-6
                                                "
                                            >
                                                {description}
                                            </p>

                                            <p
                                                className="
                                                    mt-2
                                                    text-[10px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.08em]
                                                    text-slate-400
                                                "
                                            >
                                                {seva}
                                            </p>

                                        </div>

                                        <Heart
                                            size={16}
                                            className="
                                                mt-1
                                                shrink-0
                                                text-slate-300
                                                transition-colors
                                                duration-300
                                                group-hover:text-accent-500
                                            "
                                            fill="currentColor"
                                        />

                                    </div>
                                </div>

                            </article>
                        )
                    )}
                </div>

                {/* =================================================
                    Closing Message
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-10
                        max-w-2xl
                        rounded-2xl
                        border
                        border-primary-100
                        bg-primary-50/70
                        px-5
                        py-4
                        text-center

                        sm:mt-12
                        sm:px-6
                        sm:py-5
                    "
                >
                    <p
                        className="
                            text-sm
                            leading-7
                            text-primary-800

                            sm:text-base
                        "
                    >
                        Together, these seven services reflect our
                        commitment to helping people with dignity,
                        compassion, and practical support.
                    </p>
                </div>

            </Container>
        </section>
    );
}

export default Karyas;