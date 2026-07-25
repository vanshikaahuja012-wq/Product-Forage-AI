import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            About Product Forage AI
          </h1>

          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            is a modern AI-powered web application that helps
            businesses, startups, and online sellers generate professional,
            engaging, and marketing-focused product descriptions within seconds.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">
            <a
              href="/generate"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Generate Description
            </a>

            <a
              href="#features"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              Explore Features
            </a>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              🎯 Our Mission
            </h2>

            <p className="text-lg text-gray-600 leading-8 text-center max-w-4xl mx-auto">
              Our mission is to simplify product content creation through
              Artificial Intelligence. ProductForge AI enables businesses to
              create compelling product descriptions that improve customer
              engagement, reduce manual effort, and save valuable time.
            </p>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="max-w-7xl mx-auto px-6 py-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose ProductForge AI?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3">
                AI Powered
              </h3>
              <p className="text-gray-600">
                Generate unique, engaging, and professional product descriptions
                instantly.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Receive AI-generated content within seconds using Groq AI.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3">
                Secure
              </h3>
              <p className="text-gray-600">
                JWT Authentication keeps user accounts and product data secure.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-2xl font-bold mb-3">
                PDF Export
              </h3>
              <p className="text-gray-600">
                Download generated descriptions as professional PDF documents.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">
                Responsive
              </h3>
              <p className="text-gray-600">
                Optimized for desktop, tablet, and mobile devices.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🗂️</div>
              <h3 className="text-2xl font-bold mb-3">
                Product Management
              </h3>
              <p className="text-gray-600">
                Create, edit, search, and delete products with ease.
              </p>
            </div>

          </div>
        </section>

        {/* Workflow */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">①</div>
              <h3 className="font-bold text-xl mt-5">
                Enter Product
              </h3>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">②</div>
              <h3 className="font-bold text-xl mt-5">
                Select Tone
              </h3>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">③</div>
              <h3 className="font-bold text-xl mt-5">
                AI Generates
              </h3>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">④</div>
              <h3 className="font-bold text-xl mt-5">
                Save & Download
              </h3>
            </div>

          </div>
        </section>

        {/* Technology */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-center mb-10">
              Technologies Used
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Frontend
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• React.js</li>
                  <li>• Tailwind CSS</li>
                  <li>• JavaScript</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Backend
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js</li>
                  <li>• Express.js</li>
                  <li>• MongoDB Atlas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  AI & Tools
                </h3>

                <ul className="space-y-2 text-gray-600">
                  <li>• Groq API</li>
                  <li>• JWT Authentication</li>
                  <li>• Git & GitHub</li>
                  <li>• jsPDF</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-10">
            🚀 Future Enhancements
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              🌍 Multi-language Support
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              📷 AI Product Images
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              📈 SEO Optimization
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              ☁️ Cloud Deployment
            </div>

          </div>
        </section>

        {/* Developer */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

            <h2 className="text-4xl font-bold mb-8">
              👩‍💻 Meet the Developer
            </h2>

            <div className="w-32 h-32 bg-indigo-100 rounded-full mx-auto flex items-center justify-center text-5xl">
              👩
            </div>

            <h3 className="text-3xl font-bold mt-6">
              Vanshika Ahuja
            </h3>

            <p className="text-indigo-600 font-semibold mt-2">
              AI & Full Stack Developer
            </p>

            <p className="text-gray-600 mt-6 leading-8 max-w-3xl mx-auto">
              Passionate about Artificial Intelligence, Machine Learning,
              React.js, Node.js, MongoDB, and modern web technologies.
              ProductForge AI demonstrates the integration of Generative AI
              with full-stack development to solve real-world e-commerce
              content creation challenges.
            </p>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">

          <h2 className="text-5xl font-bold">
            Ready to Transform Product Content?
          </h2>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Start generating professional AI-powered product descriptions in
            seconds with ProductForge AI.
          </p>

          <a
            href="/generate"
            className="inline-block mt-10 bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Start Generating →
          </a>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default About;