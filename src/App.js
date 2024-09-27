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
import ForGallery from './ForGallery';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the GoogleOAuthProvider

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

const App = () => {
  return (
    <div className="App">
      {/* Wrap your app's components inside the GoogleOAuthProvider */}
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AboutUs />} />
              <Route path="home" element={<Home />} />
              <Route path="whatwedo" element={<WhatWeDo />} />
              <Route path="projects" element={<Projects />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="forgallery" element={<ForGallery />} />
              <Route path="*" element={<ContactUs />} />
              <Route path="login" element={<Login />} />
              <Route path="donate" element={<Donate />} />
              <Route path="mediacorner" element={<MediaCorner />} />
              <Route path="requestcallback" element={<RequestCallback />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
