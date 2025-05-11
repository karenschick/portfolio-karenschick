import ReactDOM from "react-dom/client"; // Importing the ReactDOM client API for rendering the React app
import "./index.css"; // Global CSS file for custom styles
import App from "./App.jsx"; // Main application component
import { BrowserRouter } from "react-router-dom"; // React Router for client-side routing support
import ThemeProvider from "./providers/ThemeProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS for UI styling and responsive layout utilities

// Mount the React app to the DOM, wrapping it in BrowserRouter for routing functionality
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter basename="/portfolio">
    <ThemeProvider><App /></ThemeProvider>
  </BrowserRouter>
);
