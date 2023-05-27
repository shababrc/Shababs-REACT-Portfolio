import React from 'react';

function ProjectItem({ title, description, liveLink, repoLink }) {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Deployed Link</a>
        <br></br>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectItem;
