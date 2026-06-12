import Navbar from "../components/Navbar";

function Generate() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Product Description Generator
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Key Ingredients"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Weight"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Product Features"
            rows="4"
            className="w-full border rounded-lg p-3"
          ></textarea>

          <select className="w-full border rounded-lg p-3">
            <option>Premium</option>
            <option>Traditional</option>
            <option>Health-Focused</option>
          </select>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Generate Description
          </button>
        </div>
      </div>
    </>
  );
}

export default Generate;