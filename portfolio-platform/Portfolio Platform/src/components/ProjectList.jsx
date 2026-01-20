// Imports the ProjectCard component so each project can be displayed individually
import ProjectCard from "./ProjectCard";

// Defines a component responsible for rendering a collection of projects.
function ProjectList({ projects }) {

  return (
    // Acts as a container for all project cards 
    //Projects lose layout structure and styling.
    <div className="project-list">

      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}

    </div>
  );
}

// Exports the component for use in App.jsx will cause errors 
export default ProjectList;