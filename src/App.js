import "./App.css";
import "./index.css";
import "./i18n";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import { Suspense } from "react";

function App() {
  const location = useLocation();

  return (
    <Suspense fallback="loading">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
