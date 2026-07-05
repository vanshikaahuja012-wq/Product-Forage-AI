import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Generate from "./pages/Generate";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";

import PrivateRoute from "./components/PrivateRoute";


function App(){

return (

<BrowserRouter>

<Routes>


<Route path="/" element={<Home/>}/>


<Route path="/login" element={<Login/>}/>


<Route path="/register" element={<Register/>}/>



<Route

path="/generate"

element={

<PrivateRoute>

<Generate/>

</PrivateRoute>

}

/>



<Route path="/about" element={<About/>}/>


<Route path="/contact" element={<Contact/>}/>


</Routes>


</BrowserRouter>

);


}


export default App;