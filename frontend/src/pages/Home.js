import React, { useState, useEffect } from "react";
import ProfileHeader from "../Components/ProfileHeader";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ProjectDetails") // make sure your backend is running
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-container">
        {/* Profile Header */}
        <ProfileHeader projectCount={projects.length} />

        <div className="separator"></div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
