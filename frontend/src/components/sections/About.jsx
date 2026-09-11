import { BookOpen, HeartHandshake, Sparkles, ArrowUpRight } from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import aboutImage from "../../assets/images/kids-about.webp";

function About() {
  return (
    <section
      id="about"
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
                    -left-32
                    top-16
                    h-72
                    w-72
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
                    h-80
                    w-80
                    rounded-full
                    bg-accent-50/70
                    blur-3xl
                "
      />

      <Container>
        {/* =================================================
                    Section Heading
                ================================================== */}

        <SectionTitle
          eyebrow="About Abdullah Foundation"
          title="Serving Humanity With Care And Dignity"
          description="Abdullah Foundation works to support poor children and families through education, food, shelter, healthcare, skills, and compassionate service."
        />

        {/* =================================================
                    Main About Content
                ================================================== */}

        <div
          className="
                        relative
                        mt-14
                        grid
                        items-center
                        gap-12
                        lg:grid-cols-2
                        lg:gap-20
                    "
        >
          {/* =================================================
                        Image Side
                    ================================================== */}

          <div className="relative">
            {/* Decorative Shape */}

            <div
              aria-hidden="true"
              className="
                                absolute
                                -left-4
                                -top-4
                                h-24
                                w-24
                                rounded-3xl
                                bg-accent-500/10

                                sm:-left-6
                                sm:-top-6
                                sm:h-32
                                sm:w-32
                            "
            />

            <div
              aria-hidden="true"
              className="
                                absolute
                                -bottom-6
                                -right-5
                                h-32
                                w-32
                                rounded-full
                                bg-primary-500/10
                                blur-2xl
                            "
            />

            {/* Image Frame */}

            <div
              className="
                                group
                                relative
                                z-10
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-white
                                bg-slate-200
                                shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                            "
            >
              <img
                src={aboutImage}
                alt="Children supported through Abdullah Foundation"
                loading="lazy"
                className="
                                    h-[380px]
                                    w-full
                                    object-cover

                                    brightness-[0.95]
                                    saturate-[0.88]
                                    contrast-[0.95]

                                    transition-transform
                                    duration-700
                                    ease-out

                                    group-hover:scale-[1.025]

                                    sm:h-[460px]
                                    lg:h-[520px]
                                "
              />

              {/* Soft Image Overlay */}

              <div
                aria-hidden="true"
                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-slate-950/25
                                    via-transparent
                                    to-white/5
                                "
              />

              {/* Subtle Color Overlay */}

              <div
                aria-hidden="true"
                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-br
                                    from-primary-900/8
                                    via-transparent
                                    to-accent-500/8
                                "
              />
            </div>

            {/* =================================================
                            Floating Story Card
                        ================================================== */}

            <div
              className="
                                absolute
                                -bottom-5
                                left-4
                                z-20
                                max-w-[260px]
                                rounded-2xl
                                border
                                border-white
                                bg-white
                                px-4
                                py-4
                                shadow-[0_18px_45px_rgba(15,23,42,0.14)]
                                transition-transform
                                duration-300
                                hover:-translate-y-1

                                sm:-bottom-6
                                sm:left-6
                                sm:px-5
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
                                        bg-accent-50
                                        text-accent-600
                                    "
                >
                  <HeartHandshake size={19} />
                </div>

                <div>
                  <p
                    className="
                                            text-sm
                                            font-bold
                                            text-dark-900
                                        "
                  >
                    Helping people with dignity
                  </p>

                  <p
                    className="
                                            mt-1
                                            text-xs
                                            leading-5
                                            text-slate-500
                                        "
                  >
                    Education, food, shelter, and compassionate support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
                        Story Content
                    ================================================== */}

          <div className="relative z-10">
            {/* Small Label */}

            <span
              className="
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-primary-700
                            "
            >
              <Sparkles size={16} />
              Our Mission
            </span>

            {/* Heading */}

            <h3
              className="
                                mt-4
                                text-3xl
                                font-bold
                                leading-tight
                                tracking-tight
                                text-dark-900

                                sm:text-4xl
                            "
            >
              Free support,
              <span
                className="
                                    block
                                    text-primary-700
                                "
              >
                with hope for a better future.
              </span>
            </h3>

            {/* Story */}

            <div
              className="
                                mt-6
                                space-y-5
                                text-base
                                leading-8
                                text-slate-600
                                sm:text-lg
                            "
            >
              <p>
                Abdullah Foundation Muzaffarnagar is dedicated to serving
                underprivileged children and families with compassion, dignity,
                and practical support.
              </p>

              <p>
                The foundation is dedicated to free education, food, shelter,
                healthcare, skills development, and support for people and
                families facing difficult circumstances.
              </p>

              <p>
                The foundation's main branch is in{" "}
                <span
                  className="
                                        font-semibold
                                        text-dark-900
                                    "
                >
                  Muzaffarnagar, Uttar Pradesh
                </span>
                , with work and presence also in{" "}
                <span
                  className="
                                        font-semibold
                                        text-dark-900
                                    "
                >
                  Tundla, Firozabad
                </span>
                .
              </p>

              <p>
                Founded by{" "}
                <span
                  className="
                                        font-semibold
                                        text-dark-900
                                    "
                >
                  Shahadat Faridi
                </span>
                , Abdullah Foundation is dedicated to free education, food, and
                shelter for{" "}
                <span
                  className="
                                        font-semibold
                                        text-dark-900
                                    "
                >
                  150+ underprivileged children
                </span>
                .
              </p>

              <p>
                For support and enquiries, contact the foundation at{" "}
                <a
                  href="tel:+917088091108"
                  className="
                                        font-semibold
                                        text-primary-700
                                        transition-colors
                                        hover:text-primary-800
                                    "
                >
                  7088091108
                </a>
                .
              </p>
            </div>

            {/* =================================================
                            Values
                        ================================================== */}

            <div
              className="
                                mt-9
                                grid
                                gap-4
                                sm:grid-cols-2
                            "
            >
              {/* Education Card */}

              <div
                className="
                                    group
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:border-primary-100
                                    hover:shadow-[0_18px_40px_rgba(15,23,42,0.09)]
                                "
              >
                <div className="flex items-start justify-between">
                  <div
                    className="
                                            flex
                                            h-11
                                            w-11
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
                    <BookOpen size={20} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                                            text-slate-300
                                            transition-all
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                            group-hover:text-primary-600
                                        "
                  />
                </div>

                <h4
                  className="
                                        mt-4
                                        font-bold
                                        text-dark-900
                                    "
                >
                  Free Education
                </h4>

                <p
                  className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    "
                >
                  Supporting children with free education, useful books,
                  clothing, and opportunities to learn.
                </p>
              </div>

              {/* Dignity Card */}

              <div
                className="
                                    group
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-5
                                    shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:border-accent-100
                                    hover:shadow-[0_18px_40px_rgba(15,23,42,0.09)]
                                "
              >
                <div className="flex items-start justify-between">
                  <div
                    className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-accent-50
                                            text-accent-600
                                            transition-transform
                                            duration-300
                                            group-hover:scale-105
                                        "
                  >
                    <HeartHandshake size={20} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                                            text-slate-300
                                            transition-all
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                            group-hover:text-accent-600
                                        "
                  />
                </div>

                <h4
                  className="
                                        mt-4
                                        font-bold
                                        text-dark-900
                                    "
                >
                  Food, Shelter & Care
                </h4>

                <p
                  className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    "
                >
                  Helping families and children with food, shelter, healthcare,
                  and compassionate support.
                </p>
              </div>
            </div>

            {/* Mission Highlight */}

            <div
              className="
                                mt-6
                                rounded-2xl
                                border
                                border-primary-100
                                bg-primary-50
                                px-5
                                py-4
                            "
            >
              <p
                className="
                                    text-sm
                                    font-semibold
                                    leading-6
                                    text-primary-800
                                "
              >
                Founded by Shahadat Faridi • Dedicated to Free Education, Food &
                Shelter for 150+ underprivileged children.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
