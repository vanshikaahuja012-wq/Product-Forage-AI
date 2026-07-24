import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="
      min-h-screen
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-100
      py-16
      ">


        <div className="
        max-w-6xl
        mx-auto
        px-6
        ">


          {/* Hero Section */}

          <div className="
          text-center
          mb-16
          ">

            <h1 className="
            text-5xl
            font-extrabold
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-transparent
            bg-clip-text
            ">
              About AI Product Generator
            </h1>


            <p className="
            mt-5
            text-lg
            text-gray-600
            max-w-3xl
            mx-auto
            leading-8
            ">
              An AI-powered platform that helps businesses create
              professional, attractive, and market-ready product
              descriptions within seconds.
            </p>

          </div>



          {/* Main About Card */}

          <div className="
          bg-white
          rounded-3xl
          shadow-2xl
          p-10
          border
          ">


            <h2 className="
            text-3xl
            font-bold
            text-gray-800
            mb-5
            ">
              What is AI Product Generator?
            </h2>


            <p className="
            text-gray-600
            text-lg
            leading-8
            ">
              AI Product Generator is an intelligent e-commerce assistant
              designed to automatically generate high-quality product
              descriptions using Artificial Intelligence.
              Users can provide product details such as name, ingredients,
              features, weight, and preferred writing style to generate
              engaging descriptions suitable for online stores.
            </p>


          </div>





          {/* Features */}

          <div className="
          grid
          md:grid-cols-3
          gap-6
          mt-12
          ">


            <div className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            border
            hover:-translate-y-2
            transition
            ">

              <h3 className="
              text-xl
              font-bold
              text-indigo-600
              ">
                🤖 AI Powered
              </h3>

              <p className="
              text-gray-600
              mt-3
              ">
                Generates creative and professional descriptions using
                advanced AI models.
              </p>

            </div>



            <div className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            border
            hover:-translate-y-2
            transition
            ">

              <h3 className="
              text-xl
              font-bold
              text-purple-600
              ">
                ⚡ Fast Generation
              </h3>

              <p className="
              text-gray-600
              mt-3
              ">
                Create marketing-ready product content instantly and
                improve productivity.
              </p>

            </div>




            <div className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            border
            hover:-translate-y-2
            transition
            ">

              <h3 className="
              text-xl
              font-bold
              text-green-600
              ">
                📦 Product Management
              </h3>

              <p className="
              text-gray-600
              mt-3
              ">
                Save, update, search, and manage generated product
                descriptions easily.
              </p>

            </div>


          </div>





          {/* Technology Section */}

          <div className="
          mt-12
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          rounded-3xl
          p-10
          text-white
          shadow-xl
          ">


            <h2 className="
            text-3xl
            font-bold
            mb-6
            ">
              Technology Stack
            </h2>


            <div className="
            grid
            md:grid-cols-4
            gap-5
            text-center
            ">


              <div className="
              bg-white/20
              rounded-xl
              p-4
              ">
                React
              </div>


              <div className="
              bg-white/20
              rounded-xl
              p-4
              ">
                Tailwind CSS
              </div>


              <div className="
              bg-white/20
              rounded-xl
              p-4
              ">
                Node.js
              </div>


              <div className="
              bg-white/20
              rounded-xl
              p-4
              ">
                Groq AI
              </div>


            </div>


          </div>



        </div>


      </div>


      <Footer />
    </>
  );
}

export default About;