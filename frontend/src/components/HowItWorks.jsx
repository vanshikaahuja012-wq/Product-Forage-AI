function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "📝",
      title: "Enter Product Details",
      description:
        "Provide your product name, ingredients, weight, features, and choose the desired tone for your product description.",
    },
    {
      number: "02",
      icon: "🤖",
      title: "AI Generates Description",
      description:
        "Our AI analyzes your product information and creates a professional, engaging, and SEO-friendly product description within seconds.",
    },
    {
      number: "03",
      icon: "🚀",
      title: "Copy, Download & Manage",
      description:
        "Copy your generated description, export it as a PDF, or save it for future editing and management.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            How Product Forage AI Works
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Generate professional product descriptions in three simple steps.
            Fast, accurate, and designed for modern e-commerce businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white dark:bg-gray-950 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="absolute top-6 right-6 text-5xl font-bold text-blue-100 dark:text-gray-800">
                {step.number}
              </div>

              <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-4xl mb-8">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-8">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;