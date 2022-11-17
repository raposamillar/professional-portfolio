import React from 'react';
// import Footer from './component/Footer';
import profilePhoto from '../assets/raposa-millar.jpeg';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import twitterIcon from '../assets/icons/twitter.png';

export default function About() {
  return (
    <div id='about' className='active'>
      <h2>About Me</h2>
      <span role='img' aria-label='profile photo'>
            <img src={profilePhoto} style={{ width: '40%' }} alt='Lisa Raposa Millar in High Park in Toronto.'/>
      </span>
      <p>
        My name is Lisa and I am a developer and musician based in Toronto.  When the pandemic struck, I found myself taking on tech responsibilities in ways that I hadn't done before.  I continue to train through the UofT SCS full-stack coding bootcamp.  Upcoming solo projects include Frankenzinc, a site profiling one man's quest to build his own racecar from scratch, as well as a musical database cataloguing the complete works of contemporary composer/pianist Christopher Kies. 
      </p>
      <footer id='connect' className='icons'>
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
      {/* {(Footer)} */}
    </div>
  );
}