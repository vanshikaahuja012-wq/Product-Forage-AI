import { useState, useEffect } from "react";
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
  const [showToast, setShowToast] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all products
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tasks");
      const data = await response.json();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
    }
  };

  // Search
  const searchProducts = async (keyword) => {
    setSearch(keyword);

    if (keyword.trim() === "") {
      fetchTasks();
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/tasks/search/${keyword}`
      );

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Clear Form
  const clearForm = () => {
    setProductName("");
    setIngredients("");
    setWeight("");
    setFeatures("");
    setTone("Premium");
    setGeneratedDescription("");
    setEditingId(null);
  };

  // Generate / Update
  const handleGenerate = async () => {
    if (
      !productName.trim() ||
      !ingredients.trim() ||
      !weight.trim() ||
      !features.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      if (editingId) {
        await fetch(`http://localhost:5000/api/tasks/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName,
            ingredients,
            weight,
            features,
            tone,
            description: generatedDescription,
          }),
        });

        setEditingId(null);
      } else {
        const response = await fetch(
          "http://localhost:5000/api/generate-description",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productName,
              ingredients,
              weight,
              features,
              tone,
            }),
          }
        );

        const data = await response.json();
        setGeneratedDescription(data.description);
      }

      fetchTasks();
      setShowToast(true);
      clearForm();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Delete
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Edit
  const editTask = (task) => {
    setEditingId(task._id);

    setProductName(task.productName);
    setIngredients(task.ingredients);
    setWeight(task.weight);
    setFeatures(task.features);
    setTone(task.tone);
    setGeneratedDescription(task.description);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
  <>
    <Navbar />

    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        AI Product Description Generator
      </h1>

      {/* FORM */}
      <div className="bg-white shadow-lg rounded-lg p-6">

        {/* SEARCH */}
        <Input
          label="Search Product"
          placeholder="Search by product name..."
          value={search}
          onChange={(e) => searchProducts(e.target.value)}
        />

        <div className="mt-5">

          <Input
            label="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <Input
            label="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <Input
            label="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label className="font-semibold block mt-3">
            Product Features
          </label>

          <textarea
            rows="4"
            className="w-full border rounded-lg p-3 mt-2"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />

          <label className="font-semibold block mt-4">
            Tone
          </label>

          <select
            className="w-full border rounded-lg p-3 mt-2"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Premium</option>
            <option>Traditional</option>
            <option>Health-Focused</option>
          </select>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-6">

            <Button onClick={handleGenerate}>
              {editingId ? "Update Product" : "Generate Description"}
            </Button>

            {editingId && (
              <Button variant="secondary" onClick={clearForm}>
                Cancel
              </Button>
            )}

            <Button variant="secondary" onClick={() => setIsOpen(true)}>
              Help
            </Button>

          </div>

          {/* LOADER */}
          {loading && <Loader />}

          {/* GENERATED OUTPUT */}
          {generatedDescription && (
            <div className="bg-gray-100 p-5 rounded-lg mt-6">
              <h2 className="font-bold text-xl mb-3">
                Generated Description
              </h2>
              <p>{generatedDescription}</p>
            </div>
          )}

          {/* TOAST */}
          <Toast
            show={showToast}
            message={editingId ? "Updated Successfully!" : "Saved Successfully!"}
            onClose={() => setShowToast(false)}
          />

          {/* MODAL */}
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="How to Use"
          >
            <p>
              Fill product details → click generate → save to database.
            </p>
          </Modal>

        </div>
      </div>

      {/* SAVED PRODUCTS */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-5">
          Saved Products
        </h2>

        {tasks.length === 0 ? (
          <div className="bg-gray-100 p-5 text-center rounded-lg">
            No products found.
          </div>
        ) : (
          tasks.map((task) => (
            <Card
              key={task._id}
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>

    </div>

    <Footer />
  </>
);
}
export default Generate;