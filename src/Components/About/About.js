import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about pt-4">
        <div className="container d-flex justify-content-between">
          <div className="col-12 col-md-7 pl-0 pr-0 pt-lg-2 pr-md-4 about-left">
            <div className="info mt-4">
              <h1>Freelance Web Designer &amp; Developer based in Georgia</h1>
              <p className="mt-3 pr-0 mr-0 pr-md-5 mr-md-4">Web Designer and Developer with more than 3 years of freelance experience. Your needs are what I will be focusing on to increase your revenue and have a high impact on your users. Bellow you can find my portfolio, hope you will enjoy it!</p>
            </div>
          </div>
          <div className="col-md-6 ml-n5 about-right d-none d-lg-flex">
            <div className="about-image"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;