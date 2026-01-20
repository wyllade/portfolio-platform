// Imports the useState hook to manage form input state
import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ id: Date.now(), title });
    //  Clears the input field after successful submission
    // old input remains if this line is removed
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project title"
        required
      />
      <button>Add Project</button>
          </form>
  );
}
   // Exports the component so it can be imported and used
   // if removed it causes the app to crash 
export default ProjectForm;