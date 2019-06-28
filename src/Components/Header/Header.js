import React from 'react';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import '../../Containers/App.scss';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <header className="header py-3 position-relative animatedParent">
      <div className="container">
        <div className="header_inner d-flex justify-content-between align-items-center">
          <div className="logo animated fadeInLeft">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
    
          <nav className="navbar-expand-lg navbar-light animated fadeInRight">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="nav navbar-nav">
                <li className="mx-2"><NavLink exact activeClassName="active" to="/">Home page</NavLink></li>
                <li className="mx-2"><NavLink to="/services">Services</NavLink></li>
                <li className="mx-2"><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li className="mx-2"><NavLink className="primary-bg rounded-pill" to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;