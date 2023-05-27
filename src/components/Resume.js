import React from 'react';
import resumePDF from '../assets/resume.pdf';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="proficiencies">
        <ul>
          <li>JavaScript, React, Python, Java, CSS, HTML, React</li>
          <li>IDE, Git, Virtualbox Concepts: OOP, MERN, CRUD, REST, SQL Database Management, MYSQLServer, NodeJS, REACTJS, Maven Libraries, JUnit Testing, JDBC Database Connection, DAO Abstraction</li>
          <li>Agile SDLC, Jira, Scrum, Git, GitHub, Postman, Slack, Zoom, Xcode, Android Studio,
            Jupyter Notebooks, Microsoft Office: i.e. Word, Excel, PowerPoint</li>
          <li>Google Suite, i.e. Docs, Slides, Sheets, Pages & Keynote,
                MATLAB & SPSS IBM Statistics.</li>
        </ul>
      </div>
      <a className = "pdf" href={resumePDF} download>Download Resume</a>
    </section>
  );
}

export default Resume;
