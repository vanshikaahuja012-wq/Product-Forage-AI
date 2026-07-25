import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Preview from "../components/Preview";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Features />

        <HowItWorks />

        <Preview />

        <FAQ />

        <CTA />

      </main>

      <Footer />
    </>
  );
}

export default Home;