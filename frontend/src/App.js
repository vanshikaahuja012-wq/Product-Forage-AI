import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ComponentDemo from "./pages/ComponentDemo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/"
  element={
    <PrivateRoute>
      <Generate />
    </PrivateRoute>
  }
/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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



