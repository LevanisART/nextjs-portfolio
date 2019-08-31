import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="sticky-footer mt-5">
        <div className="container d-flex justify-content-between flex-wrap align-items-center animatedParent">
          <div className="col-xl-4 col-lg-3 col-md-2 col-sm-4 col-3 d-flex justify-content-start logo animated bounceInLeft">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>

				  <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-9 d-flex justify-content-center social animated bounceInDown">
				  	<ul className="list-inline">
				  		<li className="list-inline-item mx-2">
                <a className="rounded-pill" href="https://facebook.com/LevanisART" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
				  		<li className="list-inline-item mx-2">
                <a className="rounded-pill" href="https://dribbble.com/LevanisART" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
				  		<li className="list-inline-item mx-2">
                <a className="rounded-pill" href="https://instagram.com/levanis_art" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
				  		<li className="list-inline-item mx-2">
                <a className="rounded-pill" href="https://github.com/LevanisART" aria-label="Github" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
				  		<li className="list-inline-item mx-2">
                <a className="rounded-pill" href="mailto:levani.qotolashvili@gmail.com" aria-label="Mail">
                  <i className="far fa-envelope"></i>
                </a>
              </li>
				  	</ul>
				  </div>

          <div className="col-lg-4 col-md-4 d-flex justify-content-end copyright animated bounceInRight">
            <span>Copyright © 2019, All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;