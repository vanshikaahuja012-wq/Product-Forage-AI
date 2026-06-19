import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComponentDemo from "./pages/ComponentDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<ComponentDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



