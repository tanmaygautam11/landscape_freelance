import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Routes/Home/Home";
import About from "./components/Routes/About/About";
import Review from "./components/Routes/Reviews/Review";
import Tips from "./components/Routes/Tips/Tips";
import FullTip from "./components/Routes/Tips/FullTip";
import Services from "./components/Routes/Services/Services";
import Footer from "./components/footer/Footer";
import Loader from "./components/Preloader/Loader"; // Import Loader component
import ScrollToTop from "./components/ScrollToTopButton/Scroll ToTop";
import "./styles.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/tip/:id" element={<FullTip />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
