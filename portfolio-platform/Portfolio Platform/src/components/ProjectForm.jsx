// WHY: Imports the useState hook to manage form input state.
// WHAT HAPPENS IF REMOVED: The component cannot track user input,
// causing the form to stop working and React to throw an error.
import { useState } from "react";

// WHY: Defines a form component that allows users to add new projects.
// The addProject prop is a function passed from the parent component.
// WHAT HAPPENS IF REMOVED: Users cannot add new projects to the portfolio.
function ProjectForm({ addProject }) {

  // WHY: Stores the current value of the project title input.
  // This makes the input a controlled component.
  // WHAT HAPPENS IF REMOVED: The input becomes uncontrolled,
  // leading to React warnings and loss of data control.
  const [title, setTitle] = useState("");

  // WHY: Handles the form submission event.
  // WHAT HAPPENS IF REMOVED: The form submission logic will not run.
  const handleSubmit = (e) => {

    // WHY: Prevents the browser from reloading the page on form submit.
    // WHAT HAPPENS IF REMOVED: The page reloads, and the app loses
    // its state, breaking the SPA behavior.
    e.preventDefault();

    // WHY: Sends the new project data to the parent component
    // so it can update the project list state.
    // WHAT HAPPENS IF REMOVED: New projects are not added to the list.
    addProject({ id: Date.now(), title });

    // WHY: Clears the input field after successful submission.
    // WHAT HAPPENS IF REMOVED: Old input remains in the field,
    // which can confuse users.
    setTitle("");
  };

  return (
    // WHY: The form element groups input fields and handles submission.
    // WHAT HAPPENS IF REMOVED: Inputs lose semantic meaning and
    // submission behavior breaks.
    <form onSubmit={handleSubmit}>

      {/* WHY: Controlled input field tied to React state.
          WHAT HAPPENS IF REMOVED:
          - The input cannot update state
          - The title value will not be captured */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project title"
        required
      />

      {/* WHY: Submits the form when clicked.
          WHAT HAPPENS IF REMOVED: Users cannot submit the form
          using the button. */}
      <button>Add Project</button>

    </form>
  );
}

// WHY: Exports the component so it can be used in App.jsx.
// WHAT HAPPENS IF REMOVED: Importing this component will fail,
// causing the app to crash.
export default ProjectForm;