// useState is imported to allow this component to store and update state.
// If removed, the component cannot manage dynamic data and React will throw an error.
import { useState } from "react";

// Header is a presentational component (e.g. title / navbar).
// If removed, the app still works but the header UI disappears.
import Header from "./components/Header";

// SearchBar allows the user to type and update the searchTerm state.
// If removed, searchTerm will never change and filtering becomes useless.
import SearchBar from "./components/SearchBar";

// ProjectForm provides a way for users to add new projects.
// If removed, projects cannot be added (read-only list).
import ProjectForm from "./components/ProjectForm";

// ProjectList displays the list of projects on the screen.
// If removed, projects exist in state but are never shown.
import ProjectList from "./components/ProjectList";

// initialProjects is the starting data for the app.
// If removed, the app will crash because initial state is undefined.
import { initialProjects } from "./data";

function App() {
  // projects state holds all project objects.
  // If removed, the app cannot store or display project data.
  const [projects, setProjects] = useState(initialProjects);

  // searchTerm state stores the user's search input.
  // If removed, filtering logic will break.
  const [searchTerm, setSearchTerm] = useState("");

  // addProject adds a new project to the existing list.
  // This function is passed down to ProjectForm.
  // If removed, ProjectForm cannot add projects and will error.
  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  // filteredProjects derives a filtered version of projects based on searchTerm.
  // If removed, all projects will always be displayed (no search feature).
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header shows the app title or navigation.
          If removed, only visual structure is affected. */}
      <Header />

      <div className="container">
        {/* SearchBar updates searchTerm using setSearchTerm.
            If removed, searchTerm never changes and filtering stops. */}
        <SearchBar setSearchTerm={setSearchTerm} />

        {/* ProjectForm sends new project data to addProject.
            If removed, users cannot add new projects. */}
        <ProjectForm addProject={addProject} />

        {/* ProjectList renders the filtered projects.
            If removed, no projects are displayed at all. */}
        <ProjectList projects={filteredProjects} />
      </div>
    </>
  );
}

// App is exported so it can be rendered by React (usually in main.jsx).
// If removed, the app will not load.
export default App;
