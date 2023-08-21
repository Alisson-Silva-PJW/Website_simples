//REACT
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//COMPONENTS
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

//LAYOUT
import Navbar from "./components/layout/Navbar";

//CSS
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <p>Footer</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
