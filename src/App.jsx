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
import Impact from "./components/sections/Impact";
import Gallery from "./components/sections/Gallery";
import Donation from "./components/sections/Donation";
import Contact from "./components/sections/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Transparency from "./pages/Transparency";

function Home() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-white text-slate-900">
                <Hero />
                <About />
                <OurWork />
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
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/privacy-policy"
                    element={
                        <LegalLayout>
                            <PrivacyPolicy />
                        </LegalLayout>
                    }
                />

                <Route
                    path="/terms-of-service"
                    element={
                        <LegalLayout>
                            <TermsOfService />
                        </LegalLayout>
                    }
                />

                <Route
                    path="/transparency"
                    element={
                        <LegalLayout>
                            <Transparency />
                        </LegalLayout>
                    }
                />

                <Route
                    path="*"
                    element={<Home />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;