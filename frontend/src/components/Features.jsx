
function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Generation",
      description:
        "Generate high-quality, engaging, and SEO-friendly product descriptions instantly using advanced AI.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Create professional descriptions within seconds, saving valuable time for your business.",
    },
    {
      icon: "📄",
      title: "PDF Export",
      description:
        "Download generated descriptions as beautifully formatted PDF documents with one click.",
    },
    {
      icon: "🔍",
      title: "Product Search",
      description:
        "Quickly search and access previously generated product descriptions from your history.",
    },
    {
      icon: "✏️",
      title: "Easy Management",
      description:
        "Edit, update, and delete product descriptions anytime with complete CRUD functionality.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Enjoy a seamless experience across desktop, tablet, and mobile devices with modern responsive layouts.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            Features
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Why Choose Product Forage AI?
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Product Forage AI combines artificial intelligence with an intuitive
            interface to help businesses create professional product
            descriptions faster than ever.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {feature.description}
              </p>

              <div className="mt-6 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;