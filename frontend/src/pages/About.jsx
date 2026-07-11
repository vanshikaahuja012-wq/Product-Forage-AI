import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-gray-700">
          This is a placeholder About page for the AI Product Description
          Generator. It explains the purpose and features of the application.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;