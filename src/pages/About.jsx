import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p>
          This application helps generate AI-powered product descriptions for
          e-commerce listings.
        </p>
      </div>
    </>
  );
}

export default About;