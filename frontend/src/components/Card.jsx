function Card({
  task,
  editTask,
  deleteTask
}) {


  // Prevent crash if data is missing
  if (!task) {
    return null;
  }


  return (

    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      border
      p-6
      mb-5
      hover:shadow-xl
      transition
      "
    >


      <div className="
      flex
      justify-between
      items-start
      ">


        <div>

          <h3 className="
          text-xl
          font-bold
          text-gray-800
          ">

            📦 {task.productName || "Unknown Product"}

          </h3>


          <p className="
          text-sm
          text-gray-500
          mt-2
          ">

            Tone: {task.tone || "Premium"}

          </p>


        </div>



        <div className="
        flex
        gap-3
        ">


          <button

            onClick={() => editTask(task)}

            className="
            bg-indigo-100
            text-indigo-600
            px-3
            py-2
            rounded-lg
            "

          >

            Edit

          </button>



          <button

            onClick={() => deleteTask(task._id)}

            className="
            bg-red-100
            text-red-600
            px-3
            py-2
            rounded-lg
            "

          >

            Delete

          </button>


        </div>


      </div>




      <div className="
      mt-5
      bg-gray-50
      rounded-xl
      p-4
      text-gray-700
      ">


        {task.description || "No description available"}


      </div>



    </div>

  );

}


export default Card;