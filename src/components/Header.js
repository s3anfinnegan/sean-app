import React from 'react';
import './Header.css';
// import logo from '/path/to/svg/'

const Header = () => {
  return (
    <div className="header">
      <div className='logo'>
        {/* SVG logo goes here */}
      {/* <img src={logo} alt="Logo" /> */}
      </div>
      <div className="header-link">
      <a href="/resume.pdf" download>Download CV</a>
        <a href="https://linkedin.com/in/sean-finnegan-/">Connect</a>
        <a href="mailto:sean2001finnegan@gmail.com">Contact</a>
      </div>
    </div>
  );
}

export default Header;