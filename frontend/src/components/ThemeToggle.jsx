import { useState } from "react";


function ThemeToggle(){

  const [dark,setDark] = useState(false);


  const toggleTheme = () => {

    setDark(!dark);

    document.documentElement.classList.toggle("dark");

  };


  return (

    <button

      onClick={toggleTheme}

      className="
      p-2
      rounded-full
      bg-gray-100
      hover:bg-gray-200
      transition
      "

    >

      {
        dark
        ?
        <span className="text-xl">
          ☀️
        </span>
        :
        <span className="text-xl">
          🌙
        </span>
      }


    </button>

  );

}


export default ThemeToggle;
