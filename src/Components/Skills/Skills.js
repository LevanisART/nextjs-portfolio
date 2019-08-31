import React from 'react';
import Photoshop from '../../images/photoshop.png';
import Html from '../../images/html.png';
import Css from '../../images/css.png';
import Sass from '../../images/sass.png';
import Bootstrap from '../../images/bootstrap.png';
import Javascript from '../../images/javascript.png';
// import Illustrator from '../../images/illustrator.png';
import Figma from '../../images/figma.png';
import Reactjs from '../../images/react.png';
import Nodejs from '../../images/nodejs.png';
import PostgreSQL from '../../images/postgresql.png';
// import Wordpress from '../../images/wordpress.png';

class Skills extends React.Component {
  render() {
    return (
      <div className="card-deck align-items-start">

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Photoshop} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Adobe Photoshop</h6>
                  <span className="ml-2">5 Years</span>
                </div>
                <div className="percent"><span>90%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 photoshop">
                  <div className="level rounded-pill photoshop"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Html} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">HTML5</h6>
                  <span className="ml-2">4 Years</span>
                </div>
                <div className="percent"><span>90%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 html">
                  <div className="level rounded-pill html"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Css} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">CSS3</h6>
                  <span className="ml-2">4 Years</span>
                </div>
                <div className="percent"><span>90%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 html">
                  <div className="level rounded-pill html"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Sass} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Sass</h6>
                  <span className="ml-2">1.5 Years</span>
                </div>
                <div className="percent"><span>70%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 sass">
                  <div className="level rounded-pill sass"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Bootstrap} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Bootstrap</h6>
                  <span className="ml-2">1 Years</span>
                </div>
                <div className="percent"><span>65%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 bootstrap">
                  <div className="level rounded-pill bootstrap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Javascript} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Javascript</h6>
                  <span className="ml-2">2 Years</span>
                </div>
                <div className="percent"><span>60%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 javascript">
                  <div className="level rounded-pill javascript"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Illustrator} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Adobe Illustrator</h6>
                  <span className="ml-2">2 Years</span>
                </div>
                <div className="percent"><span>60%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 illustrator">
                  <div className="level rounded-pill illustrator"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Figma} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Figma</h6>
                  <span className="ml-2">4 Months</span>
                </div>
                <div className="percent"><span>50%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 figma">
                  <div className="level rounded-pill figma"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Reactjs} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">React.js</h6>
                  <span className="ml-2">4 Months</span>
                </div>
                <div className="percent"><span>50%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 reactjs">
                  <div className="level rounded-pill reactjs"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Nodejs} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Node.js</h6>
                  <span className="ml-2">3 Months</span>
                </div>
                <div className="percent"><span>50%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 nodejs">
                  <div className="level rounded-pill nodejs"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={PostgreSQL} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">PostgreSQL</h6>
                  <span className="ml-2">3 Months</span>
                </div>
                <div className="percent"><span>40%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 postgresql">
                  <div className="level rounded-pill postgresql"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-md-6 col-md-6 my-2 px-0 py-1 grow-sm">
          <div className="card border-0">
            <div className="card-body p-1">
              <div className="d-flex justify-content-between align-items-center p-3 flex-wrap">
                <div className="card-title m-0 d-flex flex-wrap align-items-center justify-content-start">
                  <img src={Wordpress} alt=""/>
                  <h6 className="h6 ml-2 pl-1 my-0 font-weight-bold">Wordpress</h6>
                  <span className="ml-2">1 Months</span>
                </div>
                <div className="percent"><span>30%</span></div>
                <div className="percentage w-100 rounded-pill mt-3 wordpress">
                  <div className="level rounded-pill wordpress"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    )
  }
}

export default Skills;