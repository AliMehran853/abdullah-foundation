import { ArrowUpRight, Images } from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import Kid1 from "../../assets/images/kids-gallery-1.webp";
import Kid2 from "../../assets/images/kids-gallery-2.webp";
import Kid3 from "../../assets/images/kids-gallery-3.webp";
import Kid4 from "../../assets/images/kids-gallery-4.webp";

function Gallery() {
    const images = [
        {
            id: 1,
            src: Kid1,
            alt: "Children learning together",
            title: "Learning Together",
            description:
                "Creating opportunities for children to learn, grow, and dream.",
            size: "large",
        },
        {
            id: 2,
            src: Kid2,
            alt: "Children studying together",
            title: "A Place To Learn",
            description:
                "Education can open the door to confidence and opportunity.",
            size: "normal",
        },
        {
            id: 3,
            src: Kid3,
            alt: "Children participating in learning",
            title: "Growing Together",
            description:
                "Supporting children with care, encouragement, and hope.",
            size: "normal",
        },
        {
            id: 4,
            src: Kid4,
            alt: "Children learning and smiling",
            title: "Hope For Tomorrow",
            description:
                "Every child deserves the chance to imagine a brighter future.",
            size: "wide",
        },
    ];

    return (
        <section
            id="gallery"
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
                    bg-primary-100/40
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-10
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
                    eyebrow="Gallery"
                    title="Moments That Matter"
                    description="A visual glimpse of the spirit behind education, care, opportunity, and community support."
                />

                {/* =================================================
                    Gallery Grid
                ================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mt-14
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {images.map((image) => (
                        <article
                            key={image.id}
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-[2rem]
                                bg-slate-200
                                shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)]

                                ${
                                    image.size === "large"
                                        ? "sm:row-span-2 lg:col-span-2 lg:row-span-2"
                                        : ""
                                }

                                ${
                                    image.size === "wide"
                                        ? "lg:col-span-2"
                                        : ""
                                }
                            `}
                        >
                            {/* =================================================
                                Image
                            ================================================== */}

                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className={`
                                    w-full
                                    object-cover
                                    brightness-[0.94]
                                    saturate-[0.86]
                                    contrast-[0.96]
                                    transition-all
                                    duration-700
                                    ease-out

                                    group-hover:scale-105
                                    group-hover:brightness-[0.88]
                                    group-hover:saturate-[0.92]

                                    ${
                                        image.size === "large"
                                            ? "h-[420px] sm:h-[560px] lg:h-[620px]"
                                            : image.size === "wide"
                                            ? "h-[300px] sm:h-[360px]"
                                            : "h-[300px] sm:h-[360px]"
                                    }
                                `}
                            />

                            {/* =================================================
                                Main Dark Gradient
                            ================================================== */}

                            <div
                                aria-hidden="true"
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-slate-950/80
                                    via-slate-950/15
                                    to-transparent
                                    opacity-80
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />

                            {/* =================================================
                                Subtle Brand Overlay
                            ================================================== */}

                            <div
                                aria-hidden="true"
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-br
                                    from-primary-900/10
                                    via-transparent
                                    to-accent-500/10
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />

                            {/* =================================================
                                Top Metadata
                            ================================================== */}

                            <div
                                className="
                                    absolute
                                    inset-x-0
                                    top-0
                                    flex
                                    items-center
                                    justify-between
                                    p-5
                                    sm:p-6
                                "
                            >
                                {/* Number */}

                                <span
                                    className="
                                        flex
                                        h-9
                                        min-w-9
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/30
                                        bg-black/10
                                        px-2
                                        text-xs
                                        font-bold
                                        text-white
                                        backdrop-blur-md
                                    "
                                >
                                    {String(image.id).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                                {/* Arrow */}

                                <span
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/25
                                        bg-white/10
                                        text-white
                                        opacity-0
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        group-hover:translate-x-0.5
                                        group-hover:opacity-100
                                    "
                                >
                                    <ArrowUpRight size={16} />
                                </span>
                            </div>

                            {/* =================================================
                                Bottom Content
                            ================================================== */}

                            <div
                                className="
                                    absolute
                                    inset-x-0
                                    bottom-0
                                    p-5
                                    sm:p-6
                                "
                            >
                                <div
                                    className="
                                        translate-y-2
                                        opacity-90
                                        transition-all
                                        duration-500
                                        group-hover:translate-y-0
                                        group-hover:opacity-100
                                    "
                                >
                                    <p
                                        className="
                                            text-[11px]
                                            font-bold
                                            uppercase
                                            tracking-[0.18em]
                                            text-accent-300
                                        "
                                    >
                                        Abdullah Foundation
                                    </p>

                                    <h3
                                        className="
                                            mt-2
                                            text-xl
                                            font-bold
                                            tracking-tight
                                            text-white
                                            sm:text-2xl
                                        "
                                    >
                                        {image.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            max-w-md
                                            text-sm
                                            leading-6
                                            text-white/75
                                        "
                                    >
                                        {image.description}
                                    </p>
                                </div>
                            </div>

                            {/* =================================================
                                Bottom Accent
                            ================================================== */}

                            <div
                                aria-hidden="true"
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-1
                                    w-0
                                    bg-accent-500
                                    transition-all
                                    duration-500
                                    group-hover:w-full
                                "
                            />
                        </article>
                    ))}
                </div>

                {/* =================================================
                    Gallery Closing Message
                ================================================== */}

                <div
                    className="
                        mx-auto
                        mt-12
                        max-w-2xl
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
                            border-slate-200
                            bg-white
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            text-slate-600
                            shadow-sm
                            sm:text-sm
                        "
                    >
                        <Images
                            size={16}
                            className="text-primary-700"
                        />

                        Moments of learning, care, and hope.
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
                        These images represent the spirit of the
                        foundation's work while the official foundation
                        photographs can be added later.
                    </p>
                </div>
            </Container>
        </section>
    );
}

export default Gallery;