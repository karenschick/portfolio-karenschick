import { Routes, Route } from "react-router-dom"; // React Router imports for routing different pages
import { HomePage, AboutMe, Portfolio, } from "./pages"; // Importing page components
import { Navigation, ContactForm } from "./components"; // Importing the navigation bar component
import ThemeProvider from "./providers/ThemeProvider";
import Footer from "./components/Footer/Footer"; // Importing the footer component

// Main application component
const App = () => {
  return (
    <>
      {/* Wrapper div with application-wide styling */}
      <div className="App">
        {/* Renders the navigation bar across all pages */}
        <Navigation />

        {/* Defines routes for different pages in the application */}
        <Routes>
          {/* Index route */}
          <Route index element={<HomePage />} />
          {/* Home route */}
          <Route path="/" element={<HomePage />}></Route>
          {/* About Me route */}
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          {/* Portfolio route */}
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          {/* ContactForm route */}
          <Route path="/ContactForm" element={<ContactForm />}></Route>
          {/* Catch-all route for undefined paths (404 page) */}
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
        {/* Footer rendered on all pages */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
