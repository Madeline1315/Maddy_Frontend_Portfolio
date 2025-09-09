import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/ProjectDetails") // backend URL
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="Projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name} 🌸</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Repo
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
