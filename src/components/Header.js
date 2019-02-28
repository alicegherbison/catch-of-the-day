import React from 'react';

const Header = (props) => (
  <header className="top">
  <h1>Catch <span className="ofThe"><span className="of">of</span><span className="the">the</span></span> day</h1>
  <h3 class="tagline">
  <span>{props.tagline}</span>
  </h3>
  </header>
  );
  
  export default Header;