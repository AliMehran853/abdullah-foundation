import {
    BadgeCheck,
    CalendarDays,
    FileCheck2,
    MapPin,
    ShieldCheck,
    UserCheck,
} from "lucide-react";

import Container from "../components/ui/Container";

import authorizationNotice from "../assets/authorization-notice/8.webp";

function AuthorizationNotice() {
    return (
        <main
            className="
                min-h-screen
                bg-slate-50
                py-16
                sm:py-20
                lg:py-24
            "
        >
            <Container>

                {/* =================================================
                    Page Header
                ================================================== */}

                <div className="mx-auto max-w-4xl">

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
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-primary-700
                        "
                    >
                        <ShieldCheck size={15} />

                        Authorization Notice
                    </div>

                    <h1
                        className="
                            mt-5
                            text-3xl
                            font-bold
                            leading-tight
                            tracking-tight
                            text-slate-900

                            sm:text-4xl

                            lg:text-5xl
                        "
                    >
                        Authorization Notice / Adhikar Patra
                    </h1>

                    <p
                        className="
                            mt-4
                            max-w-3xl
                            text-sm
                            leading-7
                            text-slate-500

                            sm:text-base
                        "
                    >
                        Lifetime authorization for the seven official
                        Seva Karyas of Abdulla Foundation.
                    </p>

                </div>

                {/* =================================================
                    Official Document
                ================================================== */}

                <article
                    className="
                        mx-auto
                        mt-10
                        max-w-5xl
                        overflow-hidden
                        rounded-[2rem]
                        border
                        border-slate-200
                        bg-white
                        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                    "
                >

                    {/* =================================================
                        Document Image
                    ================================================== */}

                    <div
                        className="
                            bg-slate-100
                            p-3

                            sm:p-5

                            lg:p-7
                        "
                    >
                        <div
                            className="
                                overflow-hidden
                                rounded-[1.5rem]
                                border
                                border-slate-200
                                bg-white
                            "
                        >
                            <img
                                src={authorizationNotice}
                                alt="Abdulla Foundation Lifetime Authorization Notice - Document AFM/AUTH/2026/007"
                                loading="eager"
                                decoding="async"
                                className="
                                    block
                                    h-auto
                                    w-full
                                    max-w-full
                                    object-contain
                                "
                            />
                        </div>
                    </div>

                    {/* =================================================
                        Document Details
                    ================================================== */}

                    <div
                        className="
                            border-t
                            border-slate-200
                            px-6
                            py-7

                            sm:px-8
                            sm:py-9

                            lg:px-10
                            lg:py-10
                        "
                    >

                        <div
                            className="
                                grid
                                gap-4

                                sm:grid-cols-2

                                lg:grid-cols-3
                            "
                        >

                            {/* Issuer */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.08em]
                                        text-slate-400
                                    "
                                >
                                    <FileCheck2 size={16} />

                                    Issuer
                                </div>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-semibold
                                        leading-6
                                        text-slate-900
                                    "
                                >
                                    Abdulla Foundation
                                    <br />
                                    Registered Trust
                                    <br />
                                    Muzaffarnagar - Purkazi,
                                    Uttar Pradesh, India
                                </p>
                            </div>

                            {/* Authorized Person */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.08em]
                                        text-slate-400
                                    "
                                >
                                    <UserCheck size={16} />

                                    Authorized Person
                                </div>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    Mr. Ali Bhai
                                </p>
                            </div>

                            {/* Document Number */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.08em]
                                        text-slate-400
                                    "
                                >
                                    <FileCheck2 size={16} />

                                    Document Number
                                </div>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    AFM/AUTH/2026/007
                                </p>
                            </div>

                            {/* Date */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.08em]
                                        text-slate-400
                                    "
                                >
                                    <CalendarDays size={16} />

                                    Date of Issue
                                </div>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    27 August 2026
                                </p>
                            </div>

                            {/* Signatory */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    p-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.08em]
                                        text-slate-400
                                    "
                                >
                                    <BadgeCheck size={16} />

                                    Authorized Signatory
                                </div>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    Shahadat Faridi
                                    <br />
                                    Secretary
                                </p>
                            </div>

                            {/* Validity */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-primary-100
                                    bg-primary-50
                                    p-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.08em]
                                        text-primary-700
                                    "
                                >
                                    <ShieldCheck size={16} />

                                    Validity
                                </div>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-bold
                                        leading-6
                                        text-primary-900
                                    "
                                >
                                    Lifetime
                                    <br />
                                    No expiry
                                    <br />
                                    Non-transferable
                                </p>
                            </div>

                        </div>

                        {/* =================================================
                            Authorized Welfare Initiatives
                        ================================================== */}

                        <div
                            className="
                                mt-8
                                rounded-[1.5rem]
                                border
                                border-slate-200
                                bg-slate-50
                                p-6

                                sm:p-7

                                lg:p-8
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-primary-700
                                        text-white
                                    "
                                >
                                    <ShieldCheck size={19} />
                                </div>

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-[0.08em]
                                            text-primary-700
                                        "
                                    >
                                        Authorized Welfare Initiatives
                                    </p>

                                    <h2
                                        className="
                                            mt-1
                                            text-lg
                                            font-bold
                                            text-slate-900

                                            sm:text-xl
                                        "
                                    >
                                        7 Seva Karyas
                                    </h2>

                                </div>
                            </div>

                            <div
                                className="
                                    mt-6
                                    grid
                                    gap-3

                                    sm:grid-cols-2
                                "
                            >
                                {[
                                    "Taleem Seva (Education)",
                                    "Bhojan Seva (Food distribution)",
                                    "Kapda Seva (Clothing)",
                                    "Ilaaj Seva (Medical care)",
                                    "Begharon ko Ghar (Shelter for the homeless)",
                                    "Betiyon ki Shaadi (Support for daughters' weddings)",
                                    "Viklang Suvidhaen (Facilities/support for persons with disabilities)",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="
                                            flex
                                            items-start
                                            gap-3
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-white
                                            px-4
                                            py-3
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-primary-50
                                                text-xs
                                                font-bold
                                                text-primary-700
                                            "
                                        >
                                            {index + 1}
                                        </span>

                                        <p
                                            className="
                                                pt-1
                                                text-sm
                                                leading-6
                                                text-slate-700
                                            "
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* =================================================
                            Place / Contact
                        ================================================== */}

                        <div
                            className="
                                mt-6
                                flex
                                flex-col
                                gap-4
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-5

                                sm:flex-row
                                sm:items-start
                                sm:justify-between
                            "
                        >

                            <div className="flex items-start gap-3">

                                <MapPin
                                    size={18}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-primary-700
                                    "
                                />

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            uppercase
                                            tracking-[0.08em]
                                            text-slate-400
                                        "
                                    >
                                        Place
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            font-semibold
                                            leading-6
                                            text-slate-900
                                        "
                                    >
                                        Muzaffarnagar, Uttar Pradesh
                                    </p>

                                </div>

                            </div>

                            <div
                                className="
                                    text-sm
                                    leading-6
                                    text-slate-600
                                    sm:text-right
                                "
                            >
                                <p>
                                    Contact: +91-7088091108
                                </p>

                                <p className="mt-1">
                                    Abdulla Foundation
                                </p>
                            </div>

                        </div>

                    </div>

                </article>

            </Container>
        </main>
    );
}

export default AuthorizationNotice;