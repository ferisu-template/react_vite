import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarCom from "./components/NavbarCom";
import FooterCom from "./components/FooterCom";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import Faq from "./assets/pages/Faq";

const App = () => {
  return (
    <>
      <NavbarCom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <FooterCom />
    </>
  );
};

export default App;
