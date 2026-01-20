// Imports the useState hook to manage component state
// the state won't be created
import { useState } from "react";
// ites reusable UI components for app layout and causes errors if not imported
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { initialProjects } from "./data";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  // it stores the current search term entered by the user and if removed search won't work
  const [searchTerm, setSearchTerm] = useState("");
  // it adds a new project to the existing list and the user can't add projects 

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    //Displays the site header
    // content stretches full width without it
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
// Exports the main application component and will cause errors if removed
export default App;