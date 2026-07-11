import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3"
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;