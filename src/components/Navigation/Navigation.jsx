import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import ContactForm from "../Contact/ContactForm";
import InstagramFollow from "../InstagramFollow/InstagramFollow";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../providers/ThemeProvider";
import "./Navigation.css";
import LinkedInFollow from "../LinkedInFollow/LinkedInFollow";
import GitHubFollow from "../GitHubFollow/GitHubFollow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ openContactForm, isContactOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [animationReady, setAnimationReady] = useState(false); // Track when the animation should start
  const [isHovered, setIsHovered] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const location = useLocation();
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const imgSrc = isDark ? "karenschickdark.png" : "karenschicklight.png";

  useEffect(() => {
    setAnimationReady(false);
    const timeout = setTimeout(() => {
      setAnimationReady(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]); // this runs on initial load AND on route changes

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage((prevShowImage) => !prevShowImage);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showImage]);

  if (isContactOpen) return null;

  return (
    <>
      {/* Navigation Button Animation */}

      {isMobile && animationReady && (
        <>
          <div className="nav-button-wrapper">
            <motion.button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Menu"
              // initial={{ opacity: 0, x: "850%" }} // starts from middle returns to normal
              // animate={{ opacity: 1, y: "50%", x: "50%" }}
              //
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }} // enlarges and returns to normal
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="menu-icon-container-mobile"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  scale: isOpen ? 0.9 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {showImage ? (
                    <motion.div
                      key="img"
                      initial={{ x: -window.innerWidth }}
                      animate={{ x: 0 }}
                      exit={{ x: -window.innerWidth }}
                      transition={{ duration: 1.0, ease: "easeInOut" }}
                    >
                      <img
                        src={imgSrc}
                        alt="Animated Image"
                        style={{
                          width: isOpen ? "50%" : "90%",
                          height: isOpen ? "50%" : "90%",
                          objectFit: "cover",
                          borderRadius: "5%",
                          transition: "width 0.3s ease, height 0.3s ease",
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ x: -window.innerWidth }}
                      animate={{ x: 0 }}
                      exit={{ x: -window.innerWidth }}
                      transition={{ duration: 1.0, ease: "easeInOut" }}
                    >
                      <FontAwesomeIcon
                        icon={faBars}
                        style={{
                          width: isOpen ? "50%" : "90%",
                          height: isOpen ? "50%" : "90%",
                          objectFit: "cover",
                          transition: "width 0.3s ease, height 0.3s ease",
                        }}
                        color={isDark ? "white" : "black"}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isOpen ? "open" : "closed"}
              />
              <motion.path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                initial={{ opacity: 1 }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isOpen ? "open" : "closed"}
              />
            </motion.button>
          </div>
        </>
      )}

      {/* Full-Screen Menu Overlay */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`nav-overlay-mobile ${
                isDark ? "text-white" : "nav-text-light"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: isDark
                  ? "rgba(0,0,0,0.95)"
                  : "rgba(255,255,255,0.95)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <ThemeToggle />

                <Link
                  to="/"
                  className="nav-link-mobile follow-icon"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/AboutMe"
                  className="nav-link-mobile follow-icon"
                  onClick={closeMenu}
                >
                  About Me
                </Link>
                <Link
                  to="/Portfolio"
                  className="nav-link-mobile follow-icon"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
                <Button
                  size="lg"
                  className=" m-3 follow-icon"
                  style={{
                    fontFamily: '"Julius Sans One", sans-serif',
                    fontWeight: "bold",
                  }}
                  variant={isDark ? "light" : "dark"}
                  onClick={() => {
                    closeMenu();
                    openContactForm();
                  }}
                >
                  Contact
                </Button>
                <div className="social-icons-row">
                  <GitHubFollow className="follow-icon" />

                  <LinkedInFollow className="follow-icon" />

                  <InstagramFollow className="" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Navigation Button Animation */}

      {!isMobile && animationReady && (
        <>
          <div className="desktop-menu-toggle">
            <motion.button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Menu"
              // initial={{ opacity: 0, x: "850%" }} // starts from middle returns to normal
              // animate={{ opacity: 1, y: "50%", x: "50%" }}
              //
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }} // enlarges and returns to normal
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="menu-icon-container"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  scale: isOpen ? 0.9 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {showImage ? (
                    <motion.div
                      key="img"
                      initial={{ x: -window.innerWidth }}
                      animate={{ x: 0 }}
                      exit={{ x: -window.innerWidth }}
                      transition={{ duration: 1.0, ease: "easeInOut" }}
                    >
                      <img
                        src={imgSrc}
                        alt="Animated Image"
                        style={{
                          width: isOpen ? "50%" : "90%",
                          height: isOpen ? "50%" : "90%",
                          objectFit: "cover",
                          borderRadius: "5%",
                          transition: "width 0.3s ease, height 0.3s ease",
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ x: -window.innerWidth }}
                      animate={{ x: 0 }}
                      exit={{ x: -window.innerWidth }}
                      transition={{ duration: 1.0, ease: "easeInOut" }}
                    >
                      <FontAwesomeIcon
                        icon={faBars}
                        style={{
                          width: isOpen ? "50%" : "90%",
                          height: isOpen ? "50%" : "90%",
                          objectFit: "cover",
                          transition: "width 0.3s ease, height 0.3s ease",
                        }}
                        color={isDark ? "white" : "black"}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isOpen ? "open" : "closed"}
              />
              <motion.path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                initial={{ opacity: 1 }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isOpen ? "open" : "closed"}
              />
            </motion.button>
          </div>
        </>
      )}

      {/* Full-Screen Menu Overlay */}
      {!isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`nav-overlay ${
                isDark ? "text-white" : "nav-text-light"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: isDark
                  ? "rgba(0,0,0,0.95)"
                  : "rgba(255,255,255,0.95)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 1.0 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <ThemeToggle />

                <Link
                  to="/"
                  className="nav-link follow-icon"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/AboutMe"
                  className="nav-link follow-icon"
                  onClick={closeMenu}
                >
                  About Me
                </Link>
                <Link
                  to="/Portfolio"
                  className="nav-link follow-icon"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
                <Button
                  size="lg"
                  className=" m-3 follow-icon"
                  style={{
                    fontFamily: '"Julius Sans One", sans-serif',
                    fontWeight: "bold",
                  }}
                  variant={isDark ? "light" : "dark"}
                  onClick={() => {
                    closeMenu();
                    openContactForm();
                  }}
                >
                  Contact
                </Button>
                <div className="social-icons-row">
                  <GitHubFollow className="follow-icon" />

                  <LinkedInFollow className="follow-icon" />

                  <InstagramFollow className="" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Navigation;
