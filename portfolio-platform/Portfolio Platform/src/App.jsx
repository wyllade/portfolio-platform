import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { initialProjects } from "./data";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container">
        <SearchBar setSearchTerm={setSearchTerm} />
        <ProjectForm addProject={addProject} />
        <ProjectList projects={filteredProjects} />
      </div>
    </>
  );
}

export default App;