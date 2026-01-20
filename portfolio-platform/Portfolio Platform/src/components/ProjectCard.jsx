// WHY: Defines a reusable component responsible for displaying
// a single project's details.
// WHAT HAPPENS IF REMOVED: Individual project data will not be
// displayed, making the portfolio empty or unusable.

function ProjectCard({ project }) {
  return (
    // WHY: Acts as a container for one project and applies
    // card-based styling through the "card" class.
    // WHAT HAPPENS IF REMOVED: Styling and visual separation
    // between projects is lost.
    <div className="card">

      {/* WHY: Displays the project title prominently.
          WHAT HAPPENS IF REMOVED: Users cannot identify the project. */}
      <h3>{project.title}</h3>

      {/* WHY: Shows a brief description explaining the project.
          WHAT HAPPENS IF REMOVED: Project cards lack context and
          become less informative. */}
      <p>{project.description}</p>

      {/* WHY: Displays the project category as a visual label.
          WHAT HAPPENS IF REMOVED: Category information is lost,
          reducing clarity and organization. */}
      <span>{project.category}</span>

    </div>
  );
}

// WHY: Exports the component so it can be reused by other
// components such as ProjectList.
// WHAT HAPPENS IF REMOVED: The component cannot be imported,
// causing rendering errors.
export default ProjectCard;