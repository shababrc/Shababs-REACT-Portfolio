import React from 'react';
import avatar from '../assets/avatar.jpg';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="bio">
        <img src={avatar} id = "selfie" height="600"  alt="Avatar" />
        <br/>
        <br/>
        <div class = "container-fluid">
        <p>My name is Shabab Chowdhury and I have a Bachelor of Science degree in Cognitive Science with a Minor in Psychology from the University of California at San Diego. My focuses in my cognitive science, computer science, and psychology curriculum included neural circuits, neurobiology and neuroanatomy, animal cognition, clinical and developmental psychology, behavioral science/ neuroscience, data science, sensation and perception and more.
        Throughout my life, undergraduate studies and professional experiences I have shown myself to be dedicated, motivated, and hard working when I am faced with tough challenges. I am always willing to collaborate and excel in team situations.
        With my background and coursework rooted in Cognitive Science and Psychology, experience working as an intern at a software
        company, as a user experience research assistant at the UCSD Design Lab, and my passion for the outdoors and sustainability, I believe that UCLA Bootcamp has enriched my full stack skills, and a Full Stack Developer position will soon be a strong match for my qualifications.I am seeking an entry level role as a software engineer within a tech company that will allow for professional growth and enriching experience as well as a valuable contribution to any organization.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
