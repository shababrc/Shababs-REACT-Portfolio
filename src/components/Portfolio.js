import React from 'react';
import ProjectItem from './ProjectItem';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <ProjectItem
          title="Lyrassist"
          description="Lyrassist is a web application that leverages OpenAI GPT-3.5 to generate lyrics for various music genres. With the use of GraphQL and the MERN (MongoDB, Express.js, React, Node.js) stack, Lyrassist provides an intuitive and interactive platform for lyric generation. Whether you're a seasoned musician or a budding songwriter, Lyrassist is here to inspire you and elevate your musical creations to new heights."
          liveLink="http://www.lyrassist.ai"
          repoLink="https://github.com/Rbustan0/Lyrassist"
        />
        <ProjectItem
          title="Weather Dashboard"
          description="A simple weather app for viewing future and current forecasts. A user can enter the name of a city and will be presented with neatly organized cards showing the current day's weather, including detailed information like temperature in fahrenheit, wind speed in mph, and humidity percentage. Also, we can retrieve the same information for the next five days of weather from OpenWeather API. The user's searches are saved as buttons, which can be clicked to show that previous searches weather again."
          liveLink="https://shababrc.github.io/Weather-Dashboard/"
          repoLink="https://github.com/shababrc/Weather-Dashboard"
        />
      </div>
    </section>
  );
}

export default Portfolio;
