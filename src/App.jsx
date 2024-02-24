import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Programs from "./components/Programs";
import NotFound from "./components/NotFound"; // Import the NotFound component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/testimonial" element={<Blog />} />
        <Route path="/faq" element={<Newsletter />} />

        {/* Add the NotFound route at the end */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
