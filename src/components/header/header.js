import React from 'react'
import './header.css'
import logo from "../../logo.png";
function Header() {
  return (
    <header className="header container">
    <img src={logo} className="GPT-logo" alt="logo" />
    <div id='header_title'>
      <h1 id='title'>SSWEB</h1>
      <h5 id='subTitle'>Sequel Solutions web</h5>
    </div>
    
  </header>
  )
}

export default Header