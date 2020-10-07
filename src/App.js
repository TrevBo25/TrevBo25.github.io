import React from 'react';

import Title from './comps/Title'
import Arrow from './comps/Arrow'
import Nav from './comps/Nav'
import Work from './comps/Work'
import Footer from './comps/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Title />
      <Arrow />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
