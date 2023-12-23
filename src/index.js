import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectFilePage from "./components/ProjectFilePage";
import CertificatesPage from "./components/CertificatesPage";
import AboutPage from "./components/AboutPage";
import ContactsPage from "./components/ContactsPage";
// import ModalWindow from "./components/ModalWindow";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectFilePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      {/* <ModalWindow /> */}
    </Router>
  </React.StrictMode>
);

reportWebVitals();
