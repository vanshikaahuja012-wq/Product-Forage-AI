import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />

      <section className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 py-10 px-4">
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
    </div>
  );
}

export default Home;