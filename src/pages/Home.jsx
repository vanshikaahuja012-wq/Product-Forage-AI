import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Card
        title="Premium Descriptions"
        description="Generate high-quality product descriptions for online marketplaces."
      />

      <Footer />
    </>
  );
}

export default Home;