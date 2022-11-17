import React from 'react';
import anightinPhoto from '../../assets/projects/a-night-in.jpg';
import chorebuddyPhoto from '../../assets/projects/chore-buddy.jpg';
import notablesPhoto from '../../assets/projects/notables.jpg';
import runbuddyPhoto from '../../assets/projects/run-buddy.jpg';
import thtbPhoto from '../../assets/projects/thought-huddle-tech-blog.jpg';
import wwPhoto from '../../assets/projects/weather-watcher.jpg';


export default function Projects() {
  return (
    <section id="work" className="projects">
      <h3 className="flex-row">
        Projects
      </h3>
    <div className="columns">   
      <div className="column">
        <div className="project-1">
        <a href="https://raposamillar.github.io/A-Night-In" target="_blank" rel="noreferrer"> 
        <img src={anightinPhoto} alt="A couple enjoying movie night at home." />
        <figcaption>A Night In: Front-end Collaborative Project</figcaption>  
        </a>
        <a href="https://github.com/raposamillar/A-Night-In" target="_blank" rel="noreferrer">Link to "A Night In" on GitHub</a>
        </div>
      </div>

      <div className="column">
        <div className="chore-buddy">  
        <a href="https://chorebuddy.herokuapp.com/" target="_blank" rel="noreferrer"> 
        <img src={chorebuddyPhoto} alt="Chores in need of help by volunteers." />
        <figcaption>ChoreBuddy: Back-end Collaborative Project</figcaption>
        </a>    
        <a href="https://github.com/MrPhuzzles/ChoreBuddy" target="_blank" rel="noreferrer">Link to "ChoreBuddy" on GitHub</a>
        </div>
      </div>

      <div className="column">
        <div className="notables">  
        <a href="https://arcane-caverns-67414.herokuapp.com/" target="_blank" rel="noreferrer"> 
        <img src={notablesPhoto} alt="An icon with a pencil on a page decorates the landing page." />
        <figcaption>Notables: Solo Project Using Node and Express</figcaption>
        </a>    
        <a href="https://github.com/raposamillar/notables" target="_blank" rel="noreferrer">Link to "Notables" on GitHub</a>
        </div>
      </div>

      <div className="column">
        <div className="run-buddy">  
        <a href="https://raposamillar.github.io/run-buddy/" target="_blank" rel="noreferrer"> 
        <img src={runbuddyPhoto} alt="A runner laces up." />
        <figcaption>Run Buddy: Solo Project Using HTML and CSS</figcaption>
        </a>    
        <a href="https://github.com/raposamillar/run-buddy" target="_blank" rel="noreferrer">Link to "Run Buddy" on GitHub</a>
        </div>
      </div>

      <div className="column">
        <div className="thtb">  
        <a href="https://serene-refuge-16852.herokuapp.com/" target="_blank" rel="noreferrer"> 
        <img src={thtbPhoto} alt="Landing page with three blog posts." />
        <figcaption>Thought Huddle Tech Blog: Solo Project Using Node, MySQL2, and Express</figcaption>
        </a>    
        <a href="https://github.com/raposamillar/thought-huddle-tech-blog" target="_blank" rel="noreferrer">Link to "Thought Huddle Tech Blog" on GitHub</a>
        </div>
      </div>

      <div className="column">
        <div className="weather-watcher">  
        <a href="https://raposamillar.github.io/weather-watcher/" target="_blank" rel="noreferrer"> 
        <img src={wwPhoto} alt="Type in a city name to display a 5-day forecast." />
        <figcaption>Weather Watcher: Solo Project Using HTML, CSS, and JavaScript</figcaption>
        </a>    
        <a href="https://github.com/raposamillar/weather-watcher" target="_blank" rel="noreferrer">Link to "Weather Watcher" on GitHub</a>
        </div>
      </div>

    </div>
      </section>
  );
};
