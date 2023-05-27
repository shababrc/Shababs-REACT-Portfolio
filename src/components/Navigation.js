import React from 'react';

function Navigation() {
  return (
    // <nav>
    //   <ul>
    //     <li className="active">About Me</li>
    //     <li>Portfolio</li>
    //     <li>Contact</li>
    //     <li>Resume</li>
    //   </ul>
    // </nav>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#about">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#resume">Resume</a>
      </li>
      </ul>
  </div>
</nav>

  );
}

export default Navigation;
