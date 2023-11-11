import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, AboutMe, Portfolio } from "./pages";
import { Navigation } from "./components";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  

  return (
    <>
      <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
        
      </div>
    </>
  );
};

export default App;

