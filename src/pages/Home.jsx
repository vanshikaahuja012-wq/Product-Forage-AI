import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="flex justify-center gap-6 py-10 flex-wrap">
        <Card
          title="Premium Tone"
          description="Generate elegant and high-quality product descriptions."
        />

        <Card
          title="Traditional Tone"
          description="Create descriptions with a cultural and authentic touch."
        />

        <Card
          title="Health-Focused Tone"
          description="Highlight nutritional value and wellness benefits."
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;