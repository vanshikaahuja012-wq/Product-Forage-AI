import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import Modal from "../components/ui/Modal";

function Generate() {
  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [weight, setWeight] = useState("");
  const [features, setFeatures] = useState("");
  const [tone, setTone] = useState("Premium");

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleGenerate = () => {
    setLoading(true);

    // Simulate AI generation
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Product Description Generator
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <Input
            label="Product Name"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <Input
            label="Key Ingredients"
            placeholder="Enter key ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <Input
            label="Weight"
            placeholder="Enter product weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <div>
            <label className="block mb-1 font-medium">
              Product Features
            </label>
            <textarea
              rows="4"
              placeholder="Enter product features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Select Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option>Premium</option>
              <option>Traditional</option>
              <option>Health-Focused</option>
            </select>
          </div>

          <div className="flex gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={handleGenerate}
            >
              Generate Description
            </Button>

            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsOpen(true)}
            >
              Show Help
            </Button>
          </div>

          {loading && <Loader />}

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="How to Use"
          >
            <p>
              Fill in the product details, choose a tone,
              and click <strong>Generate Description</strong>.
            </p>
          </Modal>

          <Toast
            message="Description generated successfully!"
            show={showToast}
            onClose={() => setShowToast(false)}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Generate;