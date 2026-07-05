function Card({ task, editTask, deleteTask }) {
  if (!task) return null;

  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-4">

      <h3 className="text-xl font-bold text-blue-600">
        {task?.productName || "No Product Name"}
      </h3>

      <p className="mt-2 text-gray-700">
        {task?.description || "No description available"}
      </p>

      <div className="mt-3 text-sm text-gray-600">
        <p><strong>Ingredients:</strong> {task?.ingredients}</p>
        <p><strong>Weight:</strong> {task?.weight}</p>
        <p><strong>Features:</strong> {task?.features}</p>
        <p><strong>Tone:</strong> {task?.tone}</p>
      </div>

      <div className="flex gap-2 mt-4">

        <button
          onClick={() => editTask(task)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default Card;