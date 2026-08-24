import {
    ArrowUpRight,
    Accessibility,
    BookOpen,
    BriefcaseBusiness,
    HeartHandshake,
    House,
    Utensils,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function OurWork() {
    const programs = [
        {
            id: "01",
            label: "Area 01",
            title: "Housing Support",
            description:
                "We believe every person deserves a safe place to live with dignity. We support families facing difficult housing conditions and help where possible.",
            message: "A safe home. A dignified life.",
            icon: House,
            color: "primary",
        },
        {
            id: "02",
            label: "Area 02",
            title: "Free Education",
            description:
                "We work to make education accessible for poor children through free learning opportunities, school support, clothing, and useful books.",
            message: "Give a child a chance to learn.",
            icon: BookOpen,
            color: "accent",
        },
        {
            id: "03",
            label: "Area 03",
            title: "Food, Clothing & Medicine",
            description:
                "We aim to ensure that children and families in need receive essential food, clothing, medicine, and compassionate support.",
            message: "No one should be left without basic care.",
            icon: Utensils,
            color: "primary",
        },
        {
            id: "04",
            label: "Area 04",
            title: "Livelihood & Employment",
            description:
                "We support people who want to build a better future by encouraging skills, livelihood opportunities, and pathways toward employment.",
            message: "Skills today. Opportunities tomorrow.",
            icon: BriefcaseBusiness,
            color: "accent",
        },
        {
            id: "05",
            label: "Area 05",
            title: "Disability Support",
            description:
                "We stand with people living with physical or mental disabilities and aim to support them with care, respect, and dignity.",
            message: "Standing together with dignity.",
            icon: Accessibility,
            color: "primary",
        },
        {
            id: "06",
            label: "Area 06",
            title: "Marriage Support",
            description:
                "We help families facing financial difficulties by supporting poor daughters and families with marriage-related assistance.",
            message: "Supporting families with compassion.",
            icon: HeartHandshake,
            color: "accent",
        },
    ];

    return (
        <section
            id="work"
            className="
                relative
                overflow-hidden
                bg-slate-50
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
                    -right-40
                    top-10
                    h-64
                    w-64
                    rounded-full
                    bg-primary-100/50
                    blur-3xl

                    sm:h-80
                    sm:w-80
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    left-1/4
                    h-64
                    w-64
                    rounded-full
                    bg-accent-100/40
                    blur-3xl

                    sm:h-80
                    sm:w-80
                "
            />

            <Container>
                {/* =================================================
                    Section Heading
                ================================================== */}

                <SectionTitle
                    eyebrow="Our Work"
                    title="Serving People, Creating Opportunities"
                    description="Abdullah Foundation works across education, basic needs, livelihood, disability support, housing, and family assistance."
                />

                {/* =================================================
                    Programs Grid
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
                        md:grid-cols-2
                        lg:mt-14
                        lg:grid-cols-3
                    "
                >
                    {programs.map((program) => {
                        const Icon = program.icon;

                        const isAccent =
                            program.color === "accent";

                        return (
                            <article
                                key={program.id}
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
                                            ? "hover:border-accent-200"
                                            : "hover:border-primary-200"
                                    }
                                `}
                            >
                                {/* =================================================
                                    Soft Hover Glow
                                ================================================== */}

                                <div
                                    aria-hidden="true"
                                    className={`
                                        pointer-events-none
                                        absolute
                                        -right-16
                                        -top-16
                                        h-36
                                        w-36
                                        rounded-full
                                        blur-3xl
                                        opacity-0
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-100

                                        sm:-right-20
                                        sm:-top-20
                                        sm:h-48
                                        sm:w-48

                                        ${
                                            isAccent
                                                ? "bg-accent-100/70"
                                                : "bg-primary-100/70"
                                        }
                                    `}
                                />

                                {/* =================================================
                                    Background Number
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
                                        transition-all
                                        duration-500
                                        group-hover:scale-105

                                        sm:right-2
                                        sm:top-2
                                        sm:text-[7rem]

                                        lg:right-2
                                        lg:top-2
                                        lg:text-[8rem]

                                        ${
                                            isAccent
                                                ? "text-accent-50"
                                                : "text-primary-50"
                                        }
                                    `}
                                >
                                    {program.id}
                                </span>

                                {/* =================================================
                                    Icon
                                ================================================== */}

                                <div
                                    className={`
                                        relative
                                        z-10
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        transition-all
                                        duration-500
                                        group-hover:rotate-3
                                        group-hover:scale-105

                                        sm:h-14
                                        sm:w-14

                                        ${
                                            isAccent
                                                ? `
                                                    bg-accent-50
                                                    text-accent-600
                                                    group-hover:bg-accent-500
                                                    group-hover:text-white
                                                `
                                                : `
                                                    bg-primary-50
                                                    text-primary-700
                                                    group-hover:bg-primary-700
                                                    group-hover:text-white
                                                `
                                        }
                                    `}
                                >
                                    <Icon
                                        size={23}
                                        strokeWidth={2}
                                    />
                                </div>

                                {/* =================================================
                                    Content
                                ================================================== */}

                                <div
                                    className="
                                        relative
                                        z-10
                                        mt-6

                                        sm:mt-7
                                    "
                                >
                                    <p
                                        className={`
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-[0.16em]

                                            sm:text-xs
                                            sm:tracking-[0.18em]

                                            ${
                                                isAccent
                                                    ? "text-accent-600"
                                                    : "text-primary-600"
                                            }
                                        `}
                                    >
                                        {program.label}
                                    </p>

                                    <h3
                                        className="
                                            mt-2
                                            max-w-[90%]
                                            break-words
                                            text-xl
                                            font-bold
                                            leading-tight
                                            tracking-tight
                                            text-dark-900

                                            sm:mt-3
                                            sm:max-w-full
                                            sm:text-2xl
                                        "
                                    >
                                        {program.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            max-w-prose
                                            text-sm
                                            leading-6
                                            text-slate-500

                                            sm:mt-4
                                            sm:leading-7
                                        "
                                    >
                                        {program.description}
                                    </p>
                                </div>

                                {/* =================================================
                                    Bottom Message
                                ================================================== */}

                                <div
                                    className={`
                                        relative
                                        z-10
                                        mt-6
                                        flex
                                        items-start
                                        justify-between
                                        gap-3
                                        border-t
                                        border-slate-100
                                        pt-4
                                        text-sm
                                        font-semibold

                                        sm:mt-8
                                        sm:items-center
                                        sm:pt-5

                                        ${
                                            isAccent
                                                ? "text-accent-600"
                                                : "text-primary-700"
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            max-w-[calc(100%-3rem)]
                                            leading-5
                                            sm:leading-6
                                        "
                                    >
                                        {program.message}
                                    </span>

                                    <span
                                        className={`
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            transition-all
                                            duration-300

                                            ${
                                                isAccent
                                                    ? `
                                                        bg-accent-50
                                                        group-hover:bg-accent-500
                                                        group-hover:text-white
                                                    `
                                                    : `
                                                        bg-primary-50
                                                        group-hover:bg-primary-700
                                                        group-hover:text-white
                                                    `
                                            }
                                        `}
                                    >
                                        <ArrowUpRight
                                            size={16}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                            "
                                        />
                                    </span>
                                </div>

                                {/* =================================================
                                    Bottom Accent Line
                                ================================================== */}

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
                    Bottom Message
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        mt-10
                        max-w-3xl

                        sm:mt-12
                    "
                >
                    <div
                        className="
                            rounded-2xl
                            border
                            border-primary-100
                            bg-white/80
                            px-5
                            py-5
                            text-center
                            shadow-[0_10px_30px_rgba(15,23,42,0.04)]
                            backdrop-blur-sm

                            sm:px-8
                        "
                    >
                        <p
                            className="
                                text-sm
                                leading-6
                                text-slate-500

                                sm:text-base
                                sm:leading-8
                            "
                        >
                            Abdullah Foundation believes that meaningful
                            change begins with compassion, dignity, and
                            practical support for people who need it most.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default OurWork;