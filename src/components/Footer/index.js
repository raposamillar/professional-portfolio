import React from 'react';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import twitterIcon from '../../assets/icons/twitter.png';

function Footer() {
  return (
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
  )
}

export default Footer;