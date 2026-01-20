 // Defines a reusable component responsible for displaying a single project's details

function ProjectCard({ project }) {
  return (
    // Acts as a container for one project and applies

    // Styling and visual separation between projects is lost.
    <div className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span>{project.category}</span>
    </div>
  );
}

export default ProjectCard;