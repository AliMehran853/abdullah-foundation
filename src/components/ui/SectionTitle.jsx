function SectionTitle({
    eyebrow,
    title,
    description,
    align = "center",
    className = "",
}) {
    const alignmentStyles = {
        left: "text-left",
        center: "text-center",
    };

    const descriptionAlignment = {
        left: "mr-0",
        center: "mx-auto",
    };

    return (
        <div
            className={`
                relative
                z-10
                w-full
                max-w-3xl
                ${alignmentStyles[align] || alignmentStyles.center}
                ${className}
            `}
        >
            {/* =====================================================
                Eyebrow
            ====================================================== */}

            {eyebrow && (
                <div className="mb-4">
                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-accent-600
                            sm:text-sm
                        "
                    >
                        <span
                            aria-hidden="true"
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-accent-500
                            "
                        />

                        {eyebrow}
                    </span>
                </div>
            )}

            {/* =====================================================
                Main Title
            ====================================================== */}

            <h2
                className="
                    text-3xl
                    font-bold
                    leading-[1.15]
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    lg:text-5xl
                "
            >
                {title}
            </h2>

            {/* =====================================================
                Description
            ====================================================== */}

            {description && (
                <p
                    className={`
                        ${descriptionAlignment[align] || descriptionAlignment.center}
                        mt-5
                        max-w-2xl
                        text-sm
                        leading-7
                        text-slate-500
                        sm:text-base
                        sm:leading-8
                    `}
                >
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;