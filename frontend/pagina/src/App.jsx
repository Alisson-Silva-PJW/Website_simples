//REACT
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

//LAYOUT
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
