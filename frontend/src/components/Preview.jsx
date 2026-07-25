function Preview() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            Live Preview
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            See AI in Action
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Product Forage AI transforms simple product details into compelling,
            professional descriptions that are ready for your online store.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Input Card */}

          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              📝 Product Input
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Product Name
                </p>

                <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  Organic Honey
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Ingredients
                </p>

                <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  100% Natural Honey
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Weight
                </p>

                <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  500g
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Features
                </p>

                <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl">
                  Rich in antioxidants, No preservatives, Pure & Natural
                </div>
              </div>

            </div>

          </div>

          {/* Output Card */}

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-8 text-white">

            <h3 className="text-2xl font-bold mb-8">
              🤖 AI Generated Description
            </h3>

            <p className="leading-9 text-lg">
              Experience the natural goodness of premium Organic Honey,
              carefully harvested to preserve its rich flavor and nutritional
              value. Packed with powerful antioxidants and free from artificial
              preservatives, this 100% natural honey is perfect for sweetening
              beverages, enhancing recipes, or supporting a healthier lifestyle.
              Its smooth texture and authentic taste make it an excellent choice
              for everyday use.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                📋 Copy
              </button>

              <button className="bg-black/20 border border-white px-6 py-3 rounded-xl font-semibold hover:bg-black/40 transition">
                📄 Download PDF
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Preview;