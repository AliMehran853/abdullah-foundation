import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollToTop";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import OurWork from "./components/sections/OurWork";
import Karyas from "./components/sections/Karyas";
import Impact from "./components/sections/Impact";
import Gallery from "./components/sections/Gallery";
import Donation from "./components/sections/Donation";
import Contact from "./components/sections/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Transparency from "./pages/Transparency";
import AuthorizationNotice from "./pages/AuthorizationNotice";


function Home() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-white text-slate-900">
                <Hero />
                <About />
                <OurWork />
                <Karyas />
                <Impact />
                <Gallery />
                <Donation />
                <Contact />
            </main>

            <Footer />
        </>
    );
}


function LegalLayout({ children }) {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-white text-slate-900">
                {children}
            </main>

            <Footer />
        </>
    );
}


function App() {
    return (
        <BrowserRouter>

            <ScrollToTop />

            <Routes>

                {/* =================================================
                    Home
                ================================================== */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* =================================================
                    Privacy Policy
                ================================================== */}

                <Route
                    path="/privacy-policy"
                    element={
                        <LegalLayout>
                            <PrivacyPolicy />
                        </LegalLayout>
                    }
                />


                {/* =================================================
                    Terms of Service
                ================================================== */}

                <Route
                    path="/terms-of-service"
                    element={
                        <LegalLayout>
                            <TermsOfService />
                        </LegalLayout>
                    }
                />


                {/* =================================================
                    Transparency
                ================================================== */}

                <Route
                    path="/transparency"
                    element={
                        <LegalLayout>
                            <Transparency />
                        </LegalLayout>
                    }
                />


                {/* =================================================
                    Authorization Notice
                ================================================== */}

                <Route
                    path="/authorization-notice"
                    element={
                        <LegalLayout>
                            <AuthorizationNotice />
                        </LegalLayout>
                    }
                />


                {/* =================================================
                    Fallback
                ================================================== */}

                <Route
                    path="*"
                    element={<Home />}
                />

            </Routes>

        </BrowserRouter>
    );
}


export default App;
