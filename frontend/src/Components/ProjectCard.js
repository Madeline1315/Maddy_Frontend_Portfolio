import React, { useState } from "react";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  if (!project) return null;

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Generate a random number of likes and stars for fun
  const likes = Math.floor(Math.random() * 50) + 10;
  const stars = Math.floor(Math.random() * 20) + 5;

  return (
    <>
      <div
        className="project-card cute"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-image">
          {isHovered ? (
            <div className="project-overlay">
              <div className="hover-content">
                <h4>✨ {project.name} ✨</h4>
                <p>{project.description}</p>
                <div className="cute-stats">
                  <span>💖 {likes}</span>
                  <span>⭐ {stars}</span>
                </div>
                <div className="click-hint">Click for details! 🌸</div>
              </div>
            </div>
          ) : (
            <div className="project-initials-container">
              <span className="project-initials">
                {project.name.slice(0, 2).toUpperCase()}
              </span>
              <div className="sparkles">✨</div>
            </div>
          )}
        </div>
        <div className="project-title">{project.name}</div>
      </div>

      {/* Cute Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>🌸 {project.name} 🌸</h2>
              <button className="close-btn" onClick={closeModal}>
                ❌
              </button>
            </div>
            
            <div className="modal-body">
              <div className="project-preview">
                <div className="preview-image">
                  <span className="big-initials">
                    {project.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                
                <div className="project-details">
                  <p className="description">
                    💭 <strong>Description:</strong> {project.description}
                  </p>
                  
                  <div className="project-stats-modal">
                    <div className="stat-item">💖 {likes} likes</div>
                    <div className="stat-item">⭐ {stars} stars</div>
                  </div>
                  
                  <div className="tech-stack">
                    <h4>🛠️ Tech Stack:</h4>
                    <div className="tech-tags">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Java</span>
                      <span className="tech-tag">Spring Boot</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-repo-btn"
                >
                  🚀 View Repository
                </a>
                {/* <button className="demo-btn">
                  👀 Live Demo
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;