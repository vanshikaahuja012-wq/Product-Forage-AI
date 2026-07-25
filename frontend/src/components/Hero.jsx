import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-300 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 AI-Powered E-Commerce Solution
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Generate
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Professional Product{" "}
            </span>
            Descriptions in Seconds
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-8">
            Save time and boost sales with AI-generated product descriptions.
            Create engaging, SEO-friendly, and professional content for your
            e-commerce store instantly.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <Link
              to="/generate"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              Generate Now
            </Link>

            <Link
              to="/about"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

      {/* Features Section */}

      
    </>
  );
}

export default Hero;