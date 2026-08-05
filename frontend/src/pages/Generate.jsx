import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import Modal from "../components/ui/Modal";
import jsPDF from "jspdf";


function Generate() {


  const [productName,setProductName] = useState("");
  const [ingredients,setIngredients] = useState("");
  const [weight,setWeight] = useState("");
  const [features,setFeatures] = useState("");
  const [tone,setTone] = useState("Premium");


  const [generatedDescription,setGeneratedDescription] = useState("");
  const [tasks,setTasks] = useState([]);


  const [loading,setLoading] = useState(false);


  const [showToast,setShowToast] = useState(false);
  const [toastMessage,setToastMessage] = useState("");


  const [editingId,setEditingId] = useState(null);


  const [search,setSearch] = useState("");

  const [isOpen,setIsOpen] = useState(false);



  useEffect(()=>{

    fetchTasks();

  },[]);




  const fetchTasks = async()=>{

    try{

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/tasks`
      );


      const data = await res.json();


      setTasks(
        Array.isArray(data)
        ? data
        : []
      );


    }
    catch(error){

      console.log(error);

    }

  };





  const searchProducts = async(value)=>{


    setSearch(value);


    if(value.trim()===""){

      fetchTasks();
      return;

    }


    try{


      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/tasks/search/${value}`
      );


      const data = await res.json();


      setTasks(data);


    }
    catch(error){

      console.log(error);

    }

  };





  const clearForm = ()=>{


    setProductName("");
    setIngredients("");
    setWeight("");
    setFeatures("");
    setTone("Premium");
    setGeneratedDescription("");
    setEditingId(null);


  };






  const handleGenerate = async()=>{


    if(
      !productName ||
      !ingredients ||
      !weight ||
      !features
    ){

      setToastMessage(
        "Please fill all fields"
      );

      setShowToast(true);

      return;

    }



    setLoading(true);



    try{


      if(editingId){


        await fetch(
          `${process.env.REACT_APP_API_URL}/api/tasks/${editingId}`,
          {

            method:"PUT",

            headers:{
              "Content-Type":"application/json"
            },


            body:JSON.stringify({

              productName,
              ingredients,
              weight,
              features,
              tone,
              description:generatedDescription

            })

          }
        );


        setToastMessage(
          "Product updated successfully"
        );


      }
      else{


        const response = await fetch(

          `${process.env.REACT_APP_API_URL}/api/generate-description`,

          {

            method:"POST",

            headers:{
              "Content-Type":"application/json"
            },


            body:JSON.stringify({

              productName,
              ingredients,
              weight,
              features,
              tone

            })

          }

        );



        const data = await response.json();


        setGeneratedDescription(
          data.description
        );



        setToastMessage(
          "AI Description Generated"
        );


      }



      fetchTasks();


      setShowToast(true);


    }
    catch(error){

      console.log(error);


      setToastMessage(
        "Something went wrong"
      );


      setShowToast(true);


    }
    finally{

      setLoading(false);

    }


  };





  const editTask=(task)=>{


    setEditingId(task._id);

    setProductName(task.productName);

    setIngredients(task.ingredients);

    setWeight(task.weight);

    setFeatures(task.features);

    setTone(task.tone);

    setGeneratedDescription(task.description);



    window.scrollTo({

      top:0,

      behavior:"smooth"

    });


  };





  const deleteTask = async(id)=>{


    const confirmDelete = window.confirm(
      "Delete this product?"
    );


    if(!confirmDelete)
      return;



    try{


      await fetch(

        `${process.env.REACT_APP_API_URL}/api/tasks/${id}`,

        {

          method:"DELETE"

        }

      );



      fetchTasks();



      setToastMessage(
        "Deleted successfully"
      );


      setShowToast(true);


    }
    catch(error){

      console.log(error);

    }


  };





  const downloadPDF=()=>{


    const doc = new jsPDF();


    doc.setFontSize(18);

    doc.text(
      "AI Product Description",
      20,
      20
    );



    doc.setFontSize(12);


    doc.text(
      `Product: ${productName}`,
      20,
      40
    );


    const lines =
    doc.splitTextToSize(
      generatedDescription,
      170
    );


    doc.text(
      lines,
      20,
      60
    );


    doc.save(
      `${productName}-description.pdf`
    );


  };
    return (

    <>

      <Navbar />


      <div className="
      min-h-screen
      bg-gradient-to-br
      from-indigo-50
      via-white
      to-purple-100
      py-10
      ">


        <div className="
        max-w-6xl
        mx-auto
        px-6
        ">


          {/* HEADER */}

          <div className="
          text-center
          mb-10
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

              🤖 Product Forage AI

            </h1>


            <p className="
            text-gray-600
            mt-4
            text-lg
            ">

              Create professional e-commerce descriptions using AI

            </p>


          </div>





          {/* DASHBOARD */}


          <div className="
          grid
          md:grid-cols-3
          gap-6
          mb-10
          ">


            <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            border
            ">

              <p className="text-gray-500">
                📦 Total Products
              </p>


              <h2 className="
              text-4xl
              font-bold
              text-indigo-600
              mt-2
              ">

                {tasks.length}

              </h2>


            </div>



            <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            border
            ">


              <p className="text-gray-500">
                🤖 AI Status
              </p>


              <h2 className="
              text-3xl
              font-bold
              text-green-600
              mt-2
              ">

                Online

              </h2>


            </div>




            <div className="
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            border
            ">


              <p className="text-gray-500">
                ⚡ AI Model
              </p>


              <h2 className="
              text-3xl
              font-bold
              text-purple-600
              mt-2
              ">

                Groq AI

              </h2>


            </div>


          </div>







          {/* FORM */}


          <div className="
          bg-white
          rounded-3xl
          shadow-2xl
          p-8
          border
          ">


            <h2 className="
            text-3xl
            font-bold
            mb-6
            ">

              Create Product

            </h2>




            <input

              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              "

              placeholder="Search Product"

              value={search}

              onChange={
                (e)=>searchProducts(e.target.value)
              }

            />





            <input

              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              "

              placeholder="Product Name"

              value={productName}

              onChange={
                (e)=>setProductName(e.target.value)
              }

            />





            <input

              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              "

              placeholder="Ingredients"

              value={ingredients}

              onChange={
                (e)=>setIngredients(e.target.value)
              }

            />





            <input

              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              "

              placeholder="Weight"

              value={weight}

              onChange={
                (e)=>setWeight(e.target.value)
              }

            />





            <textarea

              rows="4"

              className="
              w-full
              border
              rounded-xl
              p-4
              mb-4
              "

              placeholder="Product Features"

              value={features}

              onChange={
                (e)=>setFeatures(e.target.value)
              }

            />





            <select

              className="
              w-full
              border
              rounded-xl
              p-4
              mb-6
              "

              value={tone}

              onChange={
                (e)=>setTone(e.target.value)
              }

            >

              <option>
                Premium
              </option>

              <option>
                Traditional
              </option>

              <option>
                Health-Focused
              </option>


            </select>





            <div className="
            flex
            gap-4
            flex-wrap
            ">


              <button

                onClick={handleGenerate}

                className="
                bg-indigo-600
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                hover:bg-indigo-700
                "

              >

                {
                  loading
                  ?
                  "Generating..."
                  :
                  editingId
                  ?
                  "Update Product"
                  :
                  "Generate AI Description"
                }


              </button>




              <button

                onClick={clearForm}

                className="
                bg-gray-200
                px-8
                py-3
                rounded-xl
                "

              >

                Clear

              </button>


            </div>




            {
              loading &&

              <div className="mt-5">

                <Loader />

              </div>

            }
                        {/* AI OUTPUT */}

            {
              generatedDescription &&

              <div className="
              mt-10
              bg-gradient-to-br
              from-indigo-50
              to-purple-100
              rounded-3xl
              shadow-xl
              p-8
              border
              ">


                <h2 className="
                text-3xl
                font-bold
                text-indigo-700
                mb-5
                ">

                  ✨ AI Generated Description

                </h2>



                <div className="
                bg-white
                rounded-2xl
                p-6
                shadow-inner
                text-gray-700
                leading-8
                ">

                  {generatedDescription}

                </div>




                <div className="
                flex
                gap-4
                flex-wrap
                mt-6
                ">


                  <button

                    onClick={()=>{

                      navigator.clipboard.writeText(
                        generatedDescription
                      );


                      setToastMessage(
                        "Description copied!"
                      );


                      setShowToast(true);

                    }}

                    className="
                    bg-indigo-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    "

                  >

                    📋 Copy

                  </button>





                  <button

                    onClick={downloadPDF}

                    className="
                    bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    "

                  >

                    📄 Download PDF

                  </button>



                </div>


              </div>

            }



          </div>







          {/* PRODUCT HISTORY */}


          <div className="
          mt-16
          ">


            <h2 className="
            text-4xl
            font-bold
            mb-8
            text-gray-800
            ">

              📦 Product History

            </h2>




            {
              tasks.length === 0 ?


              (

                <div className="
                bg-white
                rounded-3xl
                shadow-xl
                p-12
                text-center
                border
                ">


                  <div className="
                  text-6xl
                  mb-4
                  ">

                    📭

                  </div>



                  <h3 className="
                  text-2xl
                  font-bold
                  text-gray-700
                  ">

                    No Products Generated Yet

                  </h3>



                  <p className="
                  text-gray-500
                  mt-3
                  ">

                    Your AI generated products will appear here.

                  </p>



                </div>

              )


              :


              (

                <div className="
                grid
                md:grid-cols-2
                gap-6
                ">


                  {
                    tasks.map((task)=>(


                      <div

                        key={task._id}

                        className="
                        bg-white
                        rounded-3xl
                        shadow-xl
                        border
                        p-6
                        hover:-translate-y-2
                        transition
                        "

                      >



                        <div className="
                        flex
                        justify-between
                        items-start
                        mb-4
                        ">



                          <div>


                            <h3 className="
                            text-2xl
                            font-bold
                            text-gray-800
                            ">

                              📦 {task.productName}

                            </h3>



                            <p className="
                            text-indigo-600
                            font-semibold
                            mt-2
                            ">

                              Tone: {task.tone}

                            </p>


                          </div>





                          <div className="
                          flex
                          gap-2
                          ">


                            <button

                              onClick={()=>
                                editTask(task)
                              }

                              className="
                              bg-blue-100
                              text-blue-600
                              px-4
                              py-2
                              rounded-xl
                              "

                            >

                              ✏️

                            </button>




                            <button

                              onClick={()=>
                                deleteTask(task._id)
                              }

                              className="
                              bg-red-100
                              text-red-600
                              px-4
                              py-2
                              rounded-xl
                              "

                            >

                              🗑️

                            </button>



                          </div>



                        </div>






                        <div className="
                        bg-gray-50
                        rounded-2xl
                        p-5
                        mb-4
                        ">


                          <p className="
                          text-gray-700
                          leading-7
                          ">

                            {task.description}

                          </p>


                        </div>






                        <div className="
                        grid
                        grid-cols-2
                        gap-3
                        ">


                          <div className="
                          bg-indigo-50
                          p-3
                          rounded-xl
                          ">

                            <b>
                              Ingredients
                            </b>


                            <p>
                              {task.ingredients}
                            </p>


                          </div>




                          <div className="
                          bg-purple-50
                          p-3
                          rounded-xl
                          ">


                            <b>
                              Weight
                            </b>


                            <p>
                              {task.weight}
                            </p>


                          </div>


                        </div>




                      </div>


                    ))

                  }


                </div>


              )

            }


          </div>




        </div>


      </div>





      <Toast

        show={showToast}

        message={toastMessage}

        onClose={()=>
          setShowToast(false)
        }

      />





      <Modal

        isOpen={isOpen}

        onClose={()=>
          setIsOpen(false)
        }

        title="How To Use"

      >

        <div className="space-y-3">

          <p>
            1. Enter product details.
          </p>

          <p>
            2. Select tone.
          </p>

          <p>
            3. Generate AI description.
          </p>

          <p>
            4. Copy or download result.
          </p>

        </div>


      </Modal>





      <Footer />


    </>

  );

}


export default Generate;