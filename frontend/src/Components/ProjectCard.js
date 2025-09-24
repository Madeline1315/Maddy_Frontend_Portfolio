import React, { useState } from "react";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  if (!project) return null;

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        {isHovered ? (
          <div className="project-overlay">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
        ) : (
          <span className="project-initials">
            {project.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
