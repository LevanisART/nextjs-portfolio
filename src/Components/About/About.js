import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about animatedParent">
        <div className="container d-flex justify-content-between">
          <div className="col-12 col-md-7 pl-0 pr-4 about-left animated fadeInLeft">
            <div className="info mt-4">
              <h1>Freelance Web Designer & Developer based in Georgia</h1>
              <p className="mt-3 pr-5 mr-4">I'm a Web Designer and Developer with more than 2 years of freelance experience. Each of the websites I design and build are based on human-centered experience. I am always looking for the newest and best way to solve all of my clients problems. If that's what you're looking for, I am ready to support your project using my knoweledge and experience.</p>
            </div>
          </div>
          <div className="col-md-5 about-right animated fadeInRight">
            <div className="about-image"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;