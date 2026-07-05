import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";


function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="
    sticky
    top-0
    z-50
    bg-white/80
    backdrop-blur-lg
    border-b
    ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-4
      flex
      justify-between
      items-center
      ">


        {/* Logo */}

        <Link
          to="/"
          className="
          flex
          items-center
          gap-2
          text-xl
          font-bold
          text-indigo-600
          "
        >

          <span className="text-2xl">
            ✨
          </span>

          AI Product Generator

        </Link>




        {/* Desktop Menu */}

        <div className="
        hidden
        md:flex
        gap-6
        items-center
        font-medium
        ">


          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>


          <Link to="/generate" className="hover:text-indigo-600">
            Generate
          </Link>


          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>


          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>


          <ThemeToggle />


          <Link
            to="/login"
            className="
            px-5
            py-2
            rounded-xl
            border
            border-indigo-600
            text-indigo-600
            hover:bg-indigo-600
            hover:text-white
            transition
            "
          >
            Login
          </Link>



          <Link
            to="/register"
            className="
            px-5
            py-2
            rounded-xl
            bg-indigo-600
            text-white
            hover:bg-indigo-700
            transition
            "
          >
            Register
          </Link>


        </div>





        {/* Mobile Menu Button */}

        <button

          className="md:hidden text-xl"

          onClick={() => setOpen(!open)}

        >

          {
            open
            ?
            "✕"
            :
            "☰"
          }

        </button>



      </div>





      {/* Mobile Menu */}

      {
        open && (

          <div className="
          md:hidden
          px-6
          pb-5
          flex
          flex-col
          gap-4
          ">


            <Link to="/">
              Home
            </Link>


            <Link to="/generate">
              Generate
            </Link>


            <Link to="/about">
              About
            </Link>


            <Link to="/contact">
              Contact
            </Link>


            <Link to="/login">
              Login
            </Link>


            <Link to="/register">
              Register
            </Link>


          </div>

        )
      }


    </nav>

  );

}


export default Navbar;