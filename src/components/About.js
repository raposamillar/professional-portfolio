import React from 'react';
// import Footer from './component/Footer';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import twitterIcon from '../assets/icons/twitter.png';

export default function About() {
  return (
    <div id='about' className='about'>
      <h2>About Me</h2>
      <p>
        My name is Lisa and I am a developer and musician based in Toronto.  When the pandemic struck, I found myself taking on tech responsibilities in ways that I hadn't done before.  I continue to train through the UofT SCS full-stack coding bootcamp.  Upcoming solo projects include Frankenzinc, a site profiling one man's quest to build his own racecar from scratch, as well as a musical database cataloguing the complete works of contemporary composer/pianist Christopher Kies. 
      </p>
      <footer id='connect' className='icons'>
        <span role='img' aria-label='github'>
          <img src={githubIcon} style={{ width: '25%' }} alt='GitHub icon'/>
        </span>
        <span role='img' aria-label='linkedin'>
          <img src={linkedinIcon} style={{ width: '25%' }} alt='LinkedIn icon'/>
        </span>
        <span role='img' aria-label='twitter'>
          <img src={twitterIcon} style={{ width: '25%' }} alt='Twitter icon'/>
        </span>
    </footer>
      {/* {(Footer)} */}
    </div>
  );
}