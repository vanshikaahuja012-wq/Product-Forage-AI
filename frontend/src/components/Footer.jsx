function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-5">

        <div>
          <h2 className="text-xl font-bold">
            AI Product Generator
          </h2>

          <p className="text-gray-400 mt-2">
            Built using React, Tailwind CSS & AI
          </p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="text-center border-t border-gray-700 py-4 text-gray-400">
        © 2026 Vanshika Ahuja. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;