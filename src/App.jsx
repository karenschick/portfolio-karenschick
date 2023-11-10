import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, AboutMe, Portfolio } from "./pages";
import { Navigation } from "./components";

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
