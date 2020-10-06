import React from 'react';

import MM from '../assets/mirroredmemories.png'
import AD from '../assets/avondale.png'
import PFT from '../assets/portfolio.png'

const sites = {
  mirroredMem: {
    title: 'Mirrored Memories QC',
    subTitleOne: 'Website of Mirrored Memories QC',
    subTitleTwo: 'Interactive Photo Booth Provider',
    image: MM,
    url: 'http://www.mirroredmemoriesqc.com/',
    code: 'https://github.com/TrevBo25/mirrored-memories-qc'
  },
  avonDale: {
    title: 'Avondale',
    subTitleOne: 'Website of The Band Avondale',
    subTitleTwo: 'Memphis based band',
    image: AD,
    url: 'https://thebandavondale.com/',
    code: 'https://github.com/TrevBo25/TheBandAvd'
  },
  portfolio: {
    title: 'This Portfolio',
    subTitleOne: 'Portfolio of Trevor Brown',
    subTitleTwo: 'Really cool Developer',
    image: PFT,
    url: 'https://thebandavondale.com/',
    code: 'https://github.com/TrevBo25/trevorsportfolio'
  }
}

const Example = ({title, subTitleOne, subTitleTwo, image, url, code}) => (
  <div className="Example">
    <div className="text">
    <h1 href="https://github.com/TrevBo25" target="_blank" rel="noopener noreferrer" className="title">{title}</h1>{/* http://www.mirroredmemoriesqc.com */}
    <p className="info">{subTitleOne}</p>
      <p className="info">{subTitleTwo}</p>
    </div>
    <div className="img-container">
      <img src={image} alt="" className="snapshot" />
      <div className="overlay">
        <a href={url} target="_blank" rel="noopener noreferrer" className="link" >Visit the site</a>
        <p>|</p>
        <a href={code} target="_blank" rel="noopener noreferrer" className="link" >See the code</a>
      </div>
    </div>
      
  </div>
);

const Work = () => (
  <div className="Work">
    <h1 className="work-title">Selected Works</h1>
    <Example {...sites.mirroredMem}/>
    <Example {...sites.avonDale}/>
    <Example {...sites.portfolio}/> {/*TODO Add in portfolio url and github link */}
  </div>
);

export default Work