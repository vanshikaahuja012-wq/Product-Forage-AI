import React, { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [weight, setWeight] = useState("");
  const [features, setFeatures] = useState("");
  const [tone, setTone] = useState("Premium");

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h1>AI Product Description Generator</h1>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Features"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />

      <br /><br />

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option>Premium</option>
        <option>Traditional</option>
        <option>Health-Focused</option>
      </select>

      <br /><br />

      <button>Generate Description</button>
    </div>
  );
}

export default App;