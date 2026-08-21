import {
    ArrowUpRight,
    BookOpen,
    HeartPulse,
    Laptop,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function OurWork() {
    const programs = [
        {
            id: "01",
            label: "Program 01",
            title: "Free Education",
            description:
                "We help children who cannot afford school with free learning support, books, tuition, and basic educational resources.",
            message: "Give a child a chance to learn",
            icon: BookOpen,
            color: "primary",
        },
        {
            id: "02",
            label: "Program 02",
            title: "Free Computer Skills",
            description:
                "We introduce children to basic computer skills and digital knowledge that can help them build confidence for the future.",
            message: "Build skills for tomorrow",
            icon: Laptop,
            color: "accent",
        },
        {
            id: "03",
            label: "Program 03",
            title: "Health & Food Support",
            description:
                "We support children with basic health awareness and food assistance to help them grow in a safer and healthier environment.",
            message: "Support a healthier childhood",
            icon: HeartPulse,
            color: "primary",
        },
    ];

    return (
        <section
            id="work"
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
                    -right-40
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
                    -bottom-40
                    left-1/4
                    h-80
                    w-80
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
                    eyebrow="Our Work"
                    title="Creating Better Opportunities"
                    description="We support children through education, computer skills, health awareness, and food support."
                />

                {/* =================================================
                    Programs Grid
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mt-14
                        grid
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {programs.map((program) => {
                        const Icon = program.icon;

                        const isAccent = program.color === "accent";

                        return (
                            <article
                                key={program.id}
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
                                        -right-20
                                        -top-20
                                        h-48
                                        w-48
                                        rounded-full
                                        blur-3xl
                                        opacity-0
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-100
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
                                        -right-3
                                        -top-7
                                        select-none
                                        text-[8rem]
                                        font-black
                                        leading-none
                                        transition-all
                                        duration-500
                                        group-hover:translate-x-1
                                        group-hover:scale-110
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
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        transition-all
                                        duration-500
                                        group-hover:rotate-3
                                        group-hover:scale-105
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
                                    <Icon size={25} strokeWidth={2} />
                                </div>

                                {/* =================================================
                                    Content
                                ================================================== */}

                                <div className="relative z-10 mt-7">
                                    <p
                                        className={`
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-[0.18em]
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
                                            mt-3
                                            text-2xl
                                            font-bold
                                            leading-tight
                                            tracking-tight
                                            text-dark-900
                                        "
                                    >
                                        {program.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-4
                                            text-sm
                                            leading-7
                                            text-slate-500
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
                                        mt-8
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                        border-t
                                        border-slate-100
                                        pt-5
                                        text-sm
                                        font-semibold
                                        ${
                                            isAccent
                                                ? "text-accent-600"
                                                : "text-primary-700"
                                        }
                                    `}
                                >
                                    <span className="leading-5">
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
                                            size={17}
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
                        mt-12
                        max-w-3xl
                    "
                >
                    <div
                        className="
                            rounded-2xl
                            border
                            border-primary-100
                            bg-white/80
                            px-6
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
                                leading-7
                                text-slate-500
                                sm:text-base
                            "
                        >
                            Every program starts with a simple belief:
                            when children receive the right support today,
                            they have a better chance to build a brighter
                            tomorrow.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default OurWork;