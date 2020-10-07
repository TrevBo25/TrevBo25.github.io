import React from 'react';

import resume from '../assets/resume.pdf'

const Footer = () => (
 <div className="Footer" >
    <a href="https://www.linkedin.com/in/trevor-brown/" target="_blank" rel="noopener noreferrer" className='link'><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/Father_T" target="_blank" rel="noopener noreferrer" className='link'><i class="fab fa-twitter-square"></i></a>
    <a href="https://github.com/TrevBo25" target="_blank" rel="noopener noreferrer" className='link'><i class="fab fa-github-square"></i></a>
    <a href="mailto:TrevorBrown25@gmail.com" title="If that doesn't work, my email is TrevorBrown25@Gmail.com" className='link'><i class="fas fa-envelope-square"></i></a>
    <a href={resume} target="_blank" rel="noopener noreferrer" className='link'><i class="far fa-file"></i></a>
 </div>
);

export default Footer