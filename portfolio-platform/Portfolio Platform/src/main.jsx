// Imports the React library, which is required to use JSX syntax
// the app won't run without it.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wraps the App component in React's StrictMode to help identify potential problems
  <React.StrictMode>
    // it renders the main application component
    <App />
  </React.StrictMode>
);