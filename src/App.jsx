import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import OurWork from "./components/sections/OurWork";
import Impact from "./components/sections/Impact";
import Gallery from "./components/sections/Gallery";
import Donation from "./components/sections/Donation";
import Contact from "./components/sections/Contact";

function App() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header />

            <main>
                <Hero />
                <About />
                <OurWork />
                <Impact />
                <Gallery />
                <Donation />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;