function Button({
    children,
    href,
    type = "button",
    variant = "primary",
    className = "",
    onClick,
    disabled = false,
    target,
    rel,
    ariaLabel,
}) {
    const baseStyles = `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-5
        py-3
        text-sm
        font-semibold
        whitespace-nowrap
        transition-all
        duration-300
        ease-out
        select-none

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary-700
        focus-visible:ring-offset-2

        active:scale-[0.98]

        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50
    `;

    const variants = {
        primary: `
            bg-primary-700
            text-white
            shadow-[0_8px_24px_rgba(30,64,175,0.15)]

            hover:-translate-y-0.5
            hover:bg-primary-800
            hover:shadow-[0_12px_30px_rgba(30,64,175,0.22)]
        `,

        accent: `
            bg-accent-500
            text-white
            shadow-[0_8px_24px_rgba(249,115,22,0.18)]

            hover:-translate-y-0.5
            hover:bg-accent-600
            hover:shadow-[0_12px_30px_rgba(249,115,22,0.25)]
        `,

        outline: `
            border-2
            border-primary-700
            bg-white
            text-primary-700

            hover:-translate-y-0.5
            hover:bg-primary-700
            hover:text-white
            hover:shadow-[0_10px_25px_rgba(30,64,175,0.12)]
        `,

        white: `
            bg-white
            text-primary-700
            shadow-[0_8px_24px_rgba(15,23,42,0.10)]

            hover:-translate-y-0.5
            hover:bg-slate-50
            hover:shadow-[0_12px_30px_rgba(15,23,42,0.15)]
        `,
    };

    const styles = `
        ${baseStyles}
        ${variants[variant] || variants.primary}
        ${className}
    `;

    if (href) {
        return (
            <a
                href={href}
                className={styles}
                onClick={onClick}
                target={target}
                rel={rel}
                aria-label={ariaLabel}
                aria-disabled={disabled}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={styles}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;
