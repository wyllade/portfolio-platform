// WHY: Imports the ProjectCard component so each project
// can be displayed individually.
// WHAT HAPPENS IF REMOVED: The project list cannot render
// individual project details, causing the UI to break.
import ProjectCard from "./ProjectCard";

// WHY: Defines a component responsible for rendering
// a collection of projects.
// WHAT HAPPENS IF REMOVED: No projects will be displayed.
function ProjectList({ projects }) {

  return (
    // WHY: Acts as a container for all project cards and
    // applies grid-based styling using the "project-list" class.
    // WHAT HAPPENS IF REMOVED: Projects lose layout structure
    // and styling.
    <div className="project-list">

      {/* WHY: Uses the map() method to dynamically render
          a ProjectCard for each project in the array.
          WHAT HAPPENS IF REMOVED:
          - No projects are rendered
          - The list becomes static or empty */}
      {projects.map((project) => (

        // WHY: The key prop uniquely identifies each list item,
        // helping React optimize rendering.
        // WHAT HAPPENS IF REMOVED:
        // - React displays warnings
        // - UI updates may behave unpredictably
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}

    </div>
  );
}

// WHY: Exports the component for use in App.jsx.
// WHAT HAPPENS IF REMOVED: Importing this component
// will cause errors and the app will fail to render.
export default ProjectList;