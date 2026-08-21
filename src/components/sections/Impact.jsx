import {
    BookOpen,
    HeartHandshake,
    Users,
    ArrowUpRight,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function Impact() {
    const impactItems = [
        {
            id: 1,
            number: "100+",
            label: "Kids Helped",
            description:
                "Children supported through education, learning resources, and essential care.",
            icon: Users,
            color: "primary",
        },
        {
            id: 2,
            number: "20+",
            label: "Volunteers",
            description:
                "People contributing their time, skills, and energy to support our mission.",
            icon: HeartHandshake,
            color: "accent",
        },
        {
            id: 3,
            number: "3",
            label: "Active Programs",
            description:
                "Education, computer skills, and health & food support for children.",
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
                    top-1/2
                    h-80
                    w-80
                    -translate-y-1/2
                    rounded-full
                    bg-primary-50
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
                    h-72
                    w-72
                    rounded-full
                    bg-accent-50
                    blur-3xl
                "
            />

            <Container>
                {/* =================================================
                    Section Heading
                ================================================== */}

                <SectionTitle
                    eyebrow="Our Impact"
                    title="Together, We Can Create Change"
                    description="Every contribution helps us reach more children and create better opportunities."
                />

                {/* =================================================
                    Impact Cards
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mt-14
                        grid
                        gap-5
                        md:grid-cols-3
                    "
                >
                    {impactItems.map((item) => {
                        const Icon = item.icon;

                        const isAccent = item.color === "accent";

                        return (
                            <article
                                key={item.id}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-7
                                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
                                    sm:p-8
                                    ${
                                        isAccent
                                            ? "hover:border-accent-100"
                                            : "hover:border-primary-100"
                                    }
                                `}
                            >
                                {/* Large Decorative Number */}

                                <span
                                    aria-hidden="true"
                                    className={`
                                        pointer-events-none
                                        absolute
                                        -right-3
                                        -top-8
                                        select-none
                                        text-[7rem]
                                        font-black
                                        leading-none
                                        transition-transform
                                        duration-500
                                        group-hover:scale-110
                                        ${
                                            isAccent
                                                ? "text-accent-50"
                                                : "text-primary-50"
                                        }
                                    `}
                                >
                                    {String(item.id).padStart(2, "0")}
                                </span>

                                {/* Top Row */}

                                <div
                                    className="
                                        relative
                                        flex
                                        items-start
                                        justify-between
                                    "
                                >
                                    {/* Icon */}

                                    <div
                                        className={`
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            transition-all
                                            duration-300
                                            ${
                                                isAccent
                                                    ? "bg-accent-50 text-accent-600 group-hover:bg-accent-500 group-hover:text-white"
                                                    : "bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white"
                                            }
                                        `}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    {/* Small Arrow */}

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-slate-100
                                            text-slate-300
                                            transition-all
                                            duration-300
                                            group-hover:border-slate-200
                                            group-hover:text-slate-500
                                        "
                                    >
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>

                                {/* Content */}

                                <div className="relative mt-8">
                                    {/* Number */}

                                    <p
                                        className={`
                                            text-5xl
                                            font-extrabold
                                            tracking-tight
                                            text-dark-900
                                            transition-colors
                                            duration-300
                                            sm:text-6xl
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
                                            mt-3
                                            text-sm
                                            font-bold
                                            text-slate-700
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
                        mt-12
                        max-w-3xl
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
                            border-primary-100
                            bg-primary-50
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            text-primary-700
                            sm:text-sm
                        "
                    >
                        <HeartHandshake size={16} />

                        Small actions can create lasting change.
                    </div>

                    <p
                        className="
                            mt-5
                            text-sm
                            leading-7
                            text-slate-500
                            sm:text-base
                        "
                    >
                        Our impact is built one child, one lesson, and one
                        helping hand at a time.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Impact;