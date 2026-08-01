import { useState, useEffect } from "react";
import jsPDF from "jspdf";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import Modal from "../components/ui/Modal";
import Card from "../components/Card";


function Generate() {

  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [weight, setWeight] = useState("");
  const [features, setFeatures] = useState("");
  const [tone, setTone] = useState("Premium");


  const [generatedDescription, setGeneratedDescription] = useState("");

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);


  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {

    fetchTasks();

  }, []);




  // ================= FETCH PRODUCTS =================

  const fetchTasks = async () => {

    try {

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/tasks`
      );


      if(!response.ok){
        throw new Error("Failed to fetch products");
      }


      const data = await response.json();

      setTasks(
        Array.isArray(data) ? data : []
      );


    } catch(error){

      console.log(error);

    }

  };





  // ================= SEARCH =================

  const searchProducts = async(keyword)=>{


    setSearch(keyword);



    if(keyword.trim()===""){

      fetchTasks();

      return;

    }



    try{


      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/tasks/search/${keyword}`
      );



      const data = await response.json();


      setTasks(data);



    }
    catch(error){

      console.log(error);

    }


  };






  // ================= CLEAR FORM =================

  const clearForm = ()=>{


    setProductName("");

    setIngredients("");

    setWeight("");

    setFeatures("");

    setTone("Premium");

    setEditingId(null);


  };







  // ================= GENERATE / UPDATE =================

  const handleGenerate = async()=>{


    if(
      !productName.trim() ||
      !ingredients.trim() ||
      !weight.trim() ||
      !features.trim()
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
          "Product updated successfully!"
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
          "Description generated successfully!"
        );


      }




      fetchTasks();

      setShowToast(true);


      clearForm();



    }
    catch(error){


      console.log(error);


      setToastMessage(
        "Something went wrong!"
      );


      setShowToast(true);


    }
    finally{


      setLoading(false);


    }


  };








  // ================= DELETE =================


  const deleteTask = async(id)=>{


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
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
        "Product deleted successfully!"
      );


      setShowToast(true);



    }
    catch(error){

      console.log(error);

    }


  };








  // ================= EDIT =================


  const editTask=(task)=>{


    setEditingId(task._id);


    setProductName(task.productName);

    setIngredients(task.ingredients);

    setWeight(task.weight);

    setFeatures(task.features);

    setTone(task.tone);

    setGeneratedDescription(
      task.description
    );



    window.scrollTo({

      top:0,

      behavior:"smooth"

    });


  };






  // ================= DOWNLOAD PDF =================


  const downloadPDF = ()=>{


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


    doc.text(
      "Description:",
      20,
      55
    );



    const lines = doc.splitTextToSize(
      generatedDescription,
      170
    );


    doc.text(
      lines,
      20,
      70
    );



    doc.save(
      `${productName || "product"}-description.pdf`
    );


  };
    return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Product Forage AI
        </h1>


        {/* FORM */}

        <div className="bg-white shadow-lg rounded-xl p-6">


          {/* SEARCH */}

          <Input
            label="Search Product"
            placeholder="Search by product name..."
            value={search}
            onChange={(e)=>searchProducts(e.target.value)}
          />



          <div className="mt-5">


            <Input
              label="Product Name"
              value={productName}
              onChange={(e)=>setProductName(e.target.value)}
            />



            <Input
              label="Ingredients"
              value={ingredients}
              onChange={(e)=>setIngredients(e.target.value)}
            />



            <Input
              label="Weight"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            />




            <label className="font-semibold block mt-4">
              Product Features
            </label>


            <textarea

              rows="4"

              className="w-full border rounded-lg p-3 mt-2"

              value={features}

              onChange={(e)=>setFeatures(e.target.value)}

            />





            <label className="font-semibold block mt-4">
              Tone
            </label>




            <select

              className="w-full border rounded-lg p-3 mt-2"

              value={tone}

              onChange={(e)=>setTone(e.target.value)}

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








            {/* BUTTONS */}


            <div className="flex flex-wrap gap-3 mt-6">


              <Button

                onClick={handleGenerate}

                disabled={loading}

              >

                {loading
                  ? "Generating..."
                  : editingId
                  ? "Update Product"
                  : "Generate Description"
                }


              </Button>





              {editingId && (

                <Button

                  variant="secondary"

                  onClick={clearForm}

                >

                  Cancel

                </Button>

              )}






              <Button

                variant="secondary"

                onClick={()=>setIsOpen(true)}

              >

                Help

              </Button>



            </div>








            {/* LOADER */}



            {loading && (

              <div className="text-center mt-6">


                <Loader />


                <p className="mt-3 text-indigo-600 font-semibold">

                  🤖 AI is generating your description...

                </p>


              </div>

            )}









            {/* GENERATED DESCRIPTION */}





            {generatedDescription && (


              <div className="bg-white border rounded-xl shadow-lg p-6 mt-8">


                <h2 className="text-2xl font-bold mb-4">

                  ✨ AI Generated Description

                </h2>




                <p className="leading-8 text-gray-700">

                  {generatedDescription}

                </p>





                <div className="flex flex-wrap gap-4 mt-6">



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


                    className="px-5 py-2 bg-indigo-600 text-white rounded-lg"

                  >

                    📋 Copy

                  </button>







                  <button

                    onClick={downloadPDF}


                    className="px-5 py-2 bg-green-600 text-white rounded-lg"

                  >

                    📄 Download PDF

                  </button>




                </div>



              </div>


            )}







            {/* TOAST */}



            <Toast

              show={showToast}

              message={toastMessage}

              onClose={()=>setShowToast(false)}

            />









            {/* MODAL */}



            <Modal

              isOpen={isOpen}

              onClose={()=>setIsOpen(false)}

              title="How to Use"

            >

              <p>

                Fill product details → Generate description → Save product.

              </p>


            </Modal>





          </div>


        </div>
                {/* DASHBOARD */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-8">


          <div className="bg-indigo-600 text-white rounded-xl p-6 shadow-lg">

            <h3 className="text-lg">
              📦 Total Products
            </h3>

            <p className="text-4xl font-bold mt-2">
              {tasks.length}
            </p>

          </div>




          <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">

            <h3 className="text-lg">
              🤖 AI Status
            </h3>

            <p className="text-2xl font-bold mt-2">
              Online
            </p>

          </div>





          <div className="bg-orange-500 text-white rounded-xl p-6 shadow-lg">

            <h3 className="text-lg">
              👤 Account
            </h3>

            <p className="text-2xl font-bold mt-2">
              Active
            </p>

          </div>


        </div>





        {/* SAVED PRODUCTS */}



        <h2 className="text-3xl font-bold mb-5">

          Saved Products

        </h2>





        {tasks.length === 0 ? (



          <div className="bg-white border rounded-xl shadow-lg p-8 text-center">


            <div className="text-5xl">
              📦
            </div>


            <h2 className="text-2xl font-bold mt-4">

              No Products Yet

            </h2>



            <p className="text-gray-600 mt-2">

              Generate your first AI product description.

            </p>



          </div>




        ) : (



          <div className="grid gap-6">


            {tasks.filter(Boolean).map((task)=>(


              <Card

                key={task._id}

                task={task}

                editTask={editTask}

                deleteTask={deleteTask}

              />


            ))}



          </div>


        )}



      </div>


      <Footer />

    </>

  );

}


export default Generate;