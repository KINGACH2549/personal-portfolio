import "./Project.css";
import emotions from "../../imgs/emotion.jpg";

function Project({ projects, color }) {
  const renderedProjects = projects.map((project) => {
    return (
      <div className="project">
        <h4 className="project-name">{project.name}</h4>
        <img className="project-img" src={emotions} alt="project-img" />

        <p className="project-desc" style={{ color }}>
          {project.desc}
        </p>
        <footer className="github-project">
          <a href={project.link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </footer>
      </div>
    );
  });
  return (
    <section className="project-container">
      <header>Projects</header>
      <div className="project-grid">{renderedProjects}</div>
    </section>
  );
}

export default Project;
