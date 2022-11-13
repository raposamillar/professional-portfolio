import React from 'react';
import Nav from '../Navigation';
import profilePhoto from '../../assets/raposa-millar.jpeg';

function Header() {

  return (
    <header className='flex-row px-1'>
      <h1>
        <a id='link' href='/'>Lisa Raposa Millar
          <span role='img' aria-label='profile photo'>
            <img src={profilePhoto} style={{ width: '25%' }} alt='Lisa Raposa Millar in High Park in Toronto.'/>
          </span>
        </a>
      </h1>
      {Nav}
    </header>
  )
}

export default Header;