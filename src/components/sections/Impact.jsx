import {
    BookOpen,
    HeartHandshake,
    MapPin,
    Users,
    ArrowUpRight,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function Impact() {
    const impactItems = [
        {
            id: 1,
            number: "150",
            label: "Poor Children",
            description:
                "Our mission focuses on providing free education, food, shelter, and essential support for 150 poor children.",
            icon: Users,
            color: "primary",
        },
        {
            id: 2,
            number: "2",
            label: "Locations",
            description:
                "Our work and presence include Muzaffarnagar, Uttar Pradesh, as the main branch and Tundla, Firozabad.",
            icon: MapPin,
            color: "accent",
        },
        {
            id: 3,
            number: "6",
            label: "Areas of Service",
            description:
                "Housing, education, basic needs, livelihood, disability support, and marriage assistance are part of the foundation's mission.",
            icon: BookOpen,
            color: "primary",
        },
    ];

    return (
        <section
            id="impact"
            className="
                relative
                overflow-hidden
                bg-white
                py-16
                sm:py-20
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
                    -left-32
                    top-1/2
                    h-64
                    w-64
                    -translate-y-1/2
                    rounded-full
                    bg-primary-50
                    blur-3xl

                    sm:-left-40
                    sm:h-80
                    sm:w-80
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-0
                    h-60
                    w-60
                    rounded-full
                    bg-accent-50
                    blur-3xl

                    sm:-right-40
                    sm:h-72
                    sm:w-72
                "
            />

            <Container>
                {/* =================================================
                    Section Heading
                ================================================== */}

                <SectionTitle
                    eyebrow="Our Impact"
                    title="Together, We Can Create Change"
                    description="Every act of support can help the foundation serve more children and families with dignity."
                />

                {/* =================================================
                    Impact Cards
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mt-10
                        grid
                        gap-5

                        sm:mt-12
                        sm:gap-6

                        md:grid-cols-3
                        lg:mt-14
                    "
                >
                    {impactItems.map((item) => {
                        const Icon = item.icon;

                        const isAccent =
                            item.color === "accent";

                        return (
                            <article
                                key={item.id}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[1.5rem]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]

                                    sm:rounded-[2rem]
                                    sm:p-7
                                    lg:p-8

                                    ${
                                        isAccent
                                            ? "hover:border-accent-100"
                                            : "hover:border-primary-100"
                                    }
                                `}
                            >
                                {/* =================================================
                                    Large Decorative Number
                                ================================================== */}

                                <span
                                    aria-hidden="true"
                                    className={`
                                        pointer-events-none
                                        absolute
                                        right-2
                                        top-1
                                        select-none
                                        text-[5rem]
                                        font-black
                                        leading-none
                                        tracking-[-0.06em]
                                        opacity-90
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105

                                        sm:right-2
                                        sm:top-2
                                        sm:text-[7rem]

                                        lg:right-2
                                        lg:top-2
                                        lg:text-[7rem]

                                        ${
                                            isAccent
                                                ? "text-accent-50"
                                                : "text-primary-50"
                                        }
                                    `}
                                >
                                    {String(item.id).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                                {/* =================================================
                                    Top Row
                                ================================================== */}

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    "
                                >
                                    {/* Icon */}

                                    <div
                                        className={`
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            transition-all
                                            duration-300

                                            sm:h-12
                                            sm:w-12

                                            ${
                                                isAccent
                                                    ? "bg-accent-50 text-accent-600 group-hover:bg-accent-500 group-hover:text-white"
                                                    : "bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white"
                                            }
                                        `}
                                    >
                                        <Icon size={21} />
                                    </div>

                                    {/* Small Arrow */}

                                    <div
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-slate-100
                                            text-slate-300
                                            transition-all
                                            duration-300

                                            sm:h-9
                                            sm:w-9

                                            group-hover:border-slate-200
                                            group-hover:text-slate-500
                                        "
                                    >
                                        <ArrowUpRight size={15} />
                                    </div>
                                </div>

                                {/* =================================================
                                    Content
                                ================================================== */}

                                <div
                                    className="
                                        relative
                                        z-10
                                        mt-7

                                        sm:mt-8
                                    "
                                >
                                    {/* Number */}

                                    <p
                                        className={`
                                            text-4xl
                                            font-extrabold
                                            tracking-tight
                                            text-dark-900
                                            transition-colors
                                            duration-300

                                            sm:text-5xl
                                            lg:text-6xl

                                            ${
                                                isAccent
                                                    ? "group-hover:text-accent-600"
                                                    : "group-hover:text-primary-700"
                                            }
                                        `}
                                    >
                                        {item.number}
                                    </p>

                                    {/* Label */}

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            font-bold
                                            leading-6
                                            text-slate-700

                                            sm:mt-3
                                            sm:text-base
                                        "
                                    >
                                        {item.label}
                                    </p>

                                    {/* Description */}

                                    <p
                                        className="
                                            mt-2
                                            max-w-sm
                                            text-sm
                                            leading-6
                                            text-slate-500

                                            sm:leading-7
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}

                                <div
                                    className={`
                                        absolute
                                        bottom-0
                                        left-0
                                        h-1
                                        w-0
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                        ${
                                            isAccent
                                                ? "bg-accent-500"
                                                : "bg-primary-700"
                                        }
                                    `}
                                />
                            </article>
                        );
                    })}
                </div>

                {/* =================================================
                    Impact Statement
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-10
                        max-w-3xl
                        text-center

                        sm:mt-12
                    "
                >
                    <div
                        className="
                            inline-flex
                            max-w-full
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-primary-100
                            bg-primary-50
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            leading-5
                            text-primary-700

                            sm:text-sm
                        "
                    >
                        <HeartHandshake
                            size={16}
                            className="shrink-0"
                        />

                        <span>
                            Serving with compassion and dignity.
                        </span>
                    </div>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-6
                            text-slate-500

                            sm:text-base
                            sm:leading-8
                        "
                    >
                        From education to basic needs and livelihood,
                        every contribution can help create a more hopeful
                        future for children and families.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Impact;