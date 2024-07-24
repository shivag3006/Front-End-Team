import React from "react";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

import WhatWeDo from "./Pages/WhatWeDo";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import Donate from "./Pages/Donate";
import MediaCorner from "./Pages/MediaCorner";
import RequestCallback from "./Pages/RequestCallback";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutUs />} />
            <Route path="home" element={<Home />} />
            <Route path="whatwedo" element={<WhatWeDo />} />
            <Route path="projects" element={<Projects />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="donate" element={<Donate />} />
            <Route path="mediacorner" element={<MediaCorner />} />
            <Route path="requestcallback" element={<RequestCallback />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
