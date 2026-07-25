import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
          🚀 Start Creating Today
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Ready to Create Professional
          <br />
          Product Descriptions?
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto leading-8">
          Save time, improve product listings, and boost customer engagement
          with AI-powered product descriptions. Product Forage AI helps
          businesses create compelling content within seconds.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            to="/generate"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            🚀 Generate Now
          </Link>

          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
          >
            📖 Learn More
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div>
            <h3 className="text-4xl font-bold text-white">100%</h3>
            <p className="text-blue-100 mt-2">
              AI Generated Content
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">24/7</h3>
            <p className="text-blue-100 mt-2">
              Available Anytime
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">⚡ Seconds</h3>
            <p className="text-blue-100 mt-2">
              Fast Description Generation
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;