import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
      
      <h1 className="text-xl md:text-2xl font-bold">
        AI Product Description Generator
      </h1>

      <ul className="flex flex-wrap gap-3 text-sm md:text-base">
        <li>
          <Link to="/" className="hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/generate" className="hover:text-gray-200">Generate</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;