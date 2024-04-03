import React from 'react'
import logo from "../assets/logo2.png"

function Header() {
  return (
    <>
        <div id="header1">
    <div id="logodiv">
        <img id="logo" src={logo} alt="logo" />
        </div>
    <div className="container">
        <h1 id="main-header">
            FAHM E DEEN ACADEMY
        </h1>
        <br/>
        <h4 id="tagline">
            ONLINE COURSES FOR SISTERS ONLY
        </h4>
    </div>
</div>

    </>
  )
}

export default Header