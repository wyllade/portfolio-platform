// WHY: Imports the React library, which is required to use JSX syntax
// and create React components.
// WHAT HAPPENS IF REMOVED:
// - JSX will not compile
// - The application will fail to run
import React from "react";

// WHY: Imports ReactDOM, which is responsible for rendering
// React components into the browser DOM.
// WHAT HAPPENS IF REMOVED:
// - React cannot attach the app to the HTML page
// - Nothing will render on the screen
import ReactDOM from "react-dom/client";

// WHY: Imports the root App component that contains the
// entire application logic and UI.
// WHAT HAPPENS IF REMOVED:
// - There is no component to render
// - The app will show a blank screen or crash
import App from "./App";

// WHY: Imports global CSS styles for the application.
// WHAT HAPPENS IF REMOVED:
// - The app will still work
// - All global styling will be lost, making the UI look plain
import "./index.css";

// WHY: Finds the root DOM element and tells React to render
// the application inside it.
// WHAT HAPPENS IF REMOVED:
// - React has no place to mount the app
// - The page remains empty
ReactDOM.createRoot(document.getElementById("root")).render(

  // WHY: React.StrictMode helps identify potential problems
  // during development by enabling additional checks.
  // WHAT HAPPENS IF REMOVED:
  // - The app still runs normally
  // - Fewer warnings and error checks are shown
  <React.StrictMode>

    {/* WHY: Renders the main App component.
        WHAT HAPPENS IF REMOVED:
        - Nothing is displayed on the page */}
    <App />

  </React.StrictMode>
);