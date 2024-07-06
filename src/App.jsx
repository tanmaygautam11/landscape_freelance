import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Routes/Home/Home";
import Footer from "./components/footer/Footer";
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
