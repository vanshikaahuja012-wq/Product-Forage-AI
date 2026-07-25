import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is Product Forage AI?",
      answer:
        "Product Forage AI is an AI-powered platform that generates professional, engaging, and SEO-friendly product descriptions for e-commerce businesses.",
    },
    {
      question: "How does the AI generate descriptions?",
      answer:
        "Simply enter your product details such as name, ingredients, weight, features, and tone. The AI analyzes the information and instantly creates a professional description.",
    },
    {
      question: "Can I download the generated description?",
      answer:
        "Yes. Every generated description can be downloaded as a PDF or copied directly to your clipboard.",
    },
    {
      question: "Can I edit or delete generated products?",
      answer:
        "Absolutely! Product Forage AI provides complete CRUD functionality so you can edit, update, search, and delete product descriptions anytime.",
    },
    {
      question: "Is Product Forage AI mobile-friendly?",
      answer:
        "Yes. The application is fully responsive and works seamlessly on desktop, tablet, and mobile devices.",
    },
    {
      question: "Is my product data secure?",
      answer:
        "Yes. Your product information is securely stored in the database, and authentication helps protect user access.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about Product Forage AI.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white dark:bg-gray-950 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden"
            >

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>

                <span className="text-2xl font-bold text-blue-600">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (

                <div className="px-6 pb-6">

                  <p className="text-gray-600 dark:text-gray-300 leading-8">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;