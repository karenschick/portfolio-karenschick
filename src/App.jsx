import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, AboutMe, Portfolio } from "./pages";
import { Navigation } from "./components";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const location = useLocation();
  const [pageVariants, setPageVariants] = useState({
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  });

  return (
    <>
      <div className="App">
        <Navigation />
        <AnimatePresence exitBeforeEnter={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                >
                  <HomePage />
                </motion.div>
              }
            ></Route>
            <Route
              path="/AboutMe"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                >
                  <AboutMe />
                </motion.div>
              }
            ></Route>
            <Route
              path="/Portfolio"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                >
                  <Portfolio />
                </motion.div>
              }
            ></Route>
            <Route
              path="*"
              element={
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={pageVariants}
                >
                  <div>404 Not Found</div>
                </motion.div>
              }
            ></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;

