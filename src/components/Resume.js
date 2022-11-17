import React from 'react';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import twitterIcon from '../assets/icons/twitter.png';

export default function Resume() {
  return (
    <div id='resume' className='active'>
      <h2>Resume</h2>
      <p id='download'>
        Download my <a href="https://docs.google.com/document/d/1XS3rqodGefl4KMzrsJ9MDZGwiohAik4zze0x8r6NT8Y/edit?usp=sharingresume" target="_blank" rel="noreferrer">resume</a>
      </p>
      <h3>Entry-level Proficiencies</h3>
      <h4>Front-end</h4>
      <ul id='front-end'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h4>Back-end</h4>
      <ul id='back-end'>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

      <footer id='resume-connect' className='icons'>
        <span role='img' aria-label='github'>
          <a href="https://github.com/raposamillar" target="_blank" rel="noreferrer">
          <img src={githubIcon} style={{ width: '25%' }} alt='GitHub icon' /></a>
        </span>
        <span role='img' aria-label='linkedin'>
          <a href="https://ca.linkedin.com/in/lisaraposamillar" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} style={{ width: '25%' }} alt='LinkedIn icon'/></a>
        </span>
        <span role='img' aria-label='twitter'>
          <a href="https://twitter.com/raposamillar" target="_blank" rel="noreferrer">
          <img src={twitterIcon} style={{ width: '25%' }} alt='Twitter icon'/></a>
        </span>
    </footer>
    </div>
  );
}