import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ id: Date.now(), title });
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

export default ProjectForm;