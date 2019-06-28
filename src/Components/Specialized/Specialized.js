import React from 'react';
import DesignIcon from '../../images/design.png';
import FrontendIcon from '../../images/front-end.png';
import BackendIcon from '../../images/back-end.png';

class Specialized extends React.Component {
  render() {
    return (
      <div className="card-deck justify-content-center px-3 animated bounceInUp">
        <div className="col-xl-6 col-lg-6 col-md-5 card border-0 pt-3 pb-0 mx-3 mb-4 grow">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <img src={DesignIcon} alt=""/>
            </div>
            <h5 className="card-title d-flex mt-3 justify-content-center font-weight-bold">Design</h5>
            <div className="card-list d-flex align-items-center flex-column my-4">
              <span className="color-primary">Skills:</span>
              <span>UI/UX Design, Web/Mobile Design</span>
            </div>
            <div className="card-list d-flex align-items-center flex-column mt-5 mb-3">
              <span className="color-primary">Design Tools:</span>
              <span>Adobe Photoshop</span>
              <span>Adobe Illustrator</span>
              <span>Figma</span>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-5 card border-0 pt-4 pb-0 mx-3 mb-4 grow">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <img src={FrontendIcon} alt=""/>
            </div>
            <h5 className="card-title d-flex mt-3 justify-content-center font-weight-bold">Front-end Development</h5>
            <div className="card-list d-flex align-items-center flex-column my-4">
              <span className="color-primary">Languages:</span>
              <span>HTML5, CSS3, Sass, Pug, JS, React.js</span>
            </div>
            <div className="card-list d-flex align-items-center flex-column mt-5 mb-3">
              <span className="color-primary">Developer Tools:</span>
              <span>Visual Studio</span>
              <span>Github</span>
              <span>Bootstrap</span>
              <span>NPM</span>
              <span>Gulp</span>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-5 card border-0 pt-4 pb-0 mx-3 mb-4 grow">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              <img src={BackendIcon} alt=""/>
            </div>
            <h5 className="card-title d-flex mt-3 justify-content-center font-weight-bold">Back-end Development</h5>
            <div className="card-list d-flex align-items-center flex-column my-4">
              <span className="color-primary">Skills:</span>
              <span>Server, Database, Api</span>
            </div>
            <div className="card-list d-flex align-items-center flex-column mt-5 mb-3">
              <span className="color-primary">Languages & Databases:</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Mysql</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Specialized;