import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/contact/Contact";
import { Homepage } from "./components/HomePage/Homepage";
import { Navbar } from "./components/navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Footer } from "./components/footer/Footer";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      // easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
