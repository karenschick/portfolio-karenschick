import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // React Router imports for routing different pages
import { Modal, Button } from "react-bootstrap";
import { HomePage, AboutMe, Portfolio } from "./pages"; // Importing page components
import { Navigation, ContactForm } from "./components"; // Importing the navigation bar component
import ThemeProvider from "./providers/ThemeProvider";
import Footer from "./components/Footer/Footer"; // Importing the footer component
import { useTheme } from "./providers/ThemeProvider";

// Main application component
const App = () => {
  const [contactModalShow, setContactModalShow] = useState(false);
  const handleShowModal = () => {
    console.log("modal should open now");
    setContactModalShow(true);
  };
  const handleCloseModal = () => setContactModalShow(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      {/* Wrapper div with application-wide styling */}
      <div className="page-wrapper">
        {/* Renders the navigation bar across all pages */}
        <Navigation
          openContactForm={handleShowModal}
          isContactOpen={contactModalShow}
        />

        {/* Defines routes for different pages in the application */}
        <Routes>
          {/* Index route */}
          <Route
            index
            element={
              <HomePage
                openContactForm={handleShowModal}
                isContactOpen={contactModalShow}
              />
            }
          />
          {/* Home route */}
          <Route path="/" element={<HomePage />}></Route>
          {/* About Me route */}
          <Route
            path="/AboutMe"
            element={
              <AboutMe
                openContactForm={handleShowModal}
                isContactOpen={contactModalShow}
              />
            }
          ></Route>
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

      {/* Contact Modal */}
      <Modal
        show={contactModalShow}
        onHide={handleCloseModal}
        size="sm"
        centered
        backdrop="true"
        keyboard={true}
        contentClassName={isDark ? "modal-reverse-light" : "modal-reverse-dark"}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: '"Julius Sans One", sans-serif',
            }}
          >
            Contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default App;
