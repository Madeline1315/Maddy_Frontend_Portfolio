import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ProjectDetails") // your backend URL
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="projects-container">
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
