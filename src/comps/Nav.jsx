import React from 'react';

import resume from '../assets/resume.pdf'

const Nav = () => (
  <div className='Nav'>
    <a href="https://www.linkedin.com/in/trevor-brown/" target="_blank" rel="noopener noreferrer" className='link'>LINKEDIN</a>
    <a href="https://twitter.com/Father_T" target="_blank" rel="noopener noreferrer" className='link'>TWITTER</a>
    <a href="https://github.com/TrevBo25" target="_blank" rel="noopener noreferrer" className='link'>GITHUB</a>
    <a href="mailto:TrevorBrown25@gmail.com" title="If that doesn't work, my email is TrevorBrown25@Gmail.com" className='link'>EMAIL</a>
    <a href={resume} target="_blank" rel="noopener noreferrer" className='link'>RESUME</a>
  </div>
);

export default Nav