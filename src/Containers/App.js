import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import Specialized from '../Components/Specialized/Specialized';
import Portfolio from '../Components/Portfolio/Portfolio';
import Skills from '../Components/Skills/Skills';
// import Testimonials from '../Components/Testimonials/Testimonials';
import Services from '../Components/Services/Services';
import Footer from '../Components/Footer/Footer';
import portfolioItems from '../Components/Portfolio/portfolioItems';
import Project from '../Components/Portfolio/Project';
import Item from '../Components/Portfolio/Item';
import Contact from '../Components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="content">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={ServicesRoute} />
            <Route exact path="/portfolio" component={PortfolioRoute} />
            <Route path="/portfolio/:id/:name" component={ProjectRoute} />
            <Route path="/projects/:id/:name" component={ProjectRoute} />
            <Route path="/contact" component={ContactRoute} />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

class Home extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     portfolio: portfolioItems
  //   }
  // }
  render() {
    const item = portfolioItems;
    var rows = [];
    for (var i = 5; i < 11; i++) {
      rows.push(<Item key={item[i].id} id={item[i].id} image={item[i].image} title={item[i].title} name={item[i].title} category={item[i].category} />);
    }
    return (
      <div>
        <About/>
  
        <section className="specializedIn py-4 my-3 position-relative" data-sequence='500'>
          <div className="d-flex justify-content-center flex-wrap" data-id='1'>
            <div className="title d-flex align-items-center flex-column p-5">
              <h2>Specialized In</h2>
              <span className="mt-3">Development and design for web and mobile</span>
            </div>
          </div>
          <div className="container codingbg mt-2">
            <div className="container_inner">
              <Specialized />
            </div>
          </div>
        </section>
  
        <section className="portfolio py-5 my-3 position-relative">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="title d-flex align-items-center flex-column px-5 pt-4 pb-5">
              <h2>Portfolio</h2>
              <span className="mt-3">Check out some of my recent projects</span>
            </div>
          </div>
          <div className="container">
            <div className="container_inner">
              <div className="card-deck align-items-start">
                {rows}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Link className="btn rounded-pill px-4" to="/portfolio">See more</Link>
            </div>
          </div>
        </section>
  
        <section className="skills py-5 my-3 position-relative light-bg">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="title d-flex align-items-center flex-column px-5 pt-4 pb-5">
              <h2>Skill set</h2>
              <span className="mt-3">Skills and skill levels</span>
            </div>
          </div>
          <div className="container">
            <div className="container_inner">
              <Skills />
            </div>
          </div>
        </section>
  
        {/* <section className="testimonials py-5 my-3">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="title d-flex align-items-center flex-column px-5 pt-4 pb-5">
              <h2>Testimontials</h2>
              <span className="mt-3">See what our customers are saying</span>
            </div>
          </div>
          <div className="container">
            <div className="container_inner">
              <Testimonials />
            </div>
          </div>
        </section> */}
      </div>
    )
  }
}

function ServicesRoute() {
  return (
    <div>
      <div className="bigTitle py-5 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-white text-uppercase mb-3 pb-2">Services</h2>
        <span className="h5 font-weight-normal text-white text-center px-4 mb-4 pb-2">Modern web/mobile development and design services</span>
      </div>

      <div className="container container-rounded rounded-lg position-relative">
        <section className="position-relative">
          <Services />
        </section>
      </div>
    </div>
  )
}

function ContactRoute() {
  return (
    <div>
      <div className="bigTitle py-5 d-flex align-items-center justify-content-center flex-column">
        <h2 className="text-white text-uppercase mb-3 pb-2">Contact</h2>
        <span className="h5 font-weight-normal text-white text-center px-4 mb-4 pb-2">Get in touch</span>
      </div>

      <div className="container container-rounded rounded-lg bg-white shadow position-relative">
        <section className="p-2 position-relative">
          <Contact />
        </section>
      </div>
    </div>
  )
}

class PortfolioRoute extends React.Component {
  render() {
    return (
      <div>
        <div className="bigTitle py-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-white text-uppercase mb-3 pb-2">Portfolio</h2>
          <span className="h5 font-weight-normal text-white text-center px-4 mb-4 pb-2">These are my works</span>
        </div>

        <div className="container container-rounded rounded-lg bg-white shadow position-relative">
          <section className="portfolio p-2 m-1 position-relative">
            <Portfolio portfolio={portfolioItems}/>
          </section>
        </div>
      </div>
    );
  }
}

class ProjectRoute extends React.Component {
  render() {
    let id = this.props.match.params.id;
    let name = this.props.match.params.name;
    const {image, title, category, description, screenshots, date, website, dribbble} = portfolioItems[id];
    return (
      <div>
        <div className="bigTitle py-5 d-flex align-items-center justify-content-center flex-column">
          <h2 className="text-white text-uppercase mb-3 pb-2">{title}</h2>
          <h3 className="h5 font-weight-normal text-white text-center px-4 mb-4 pb-2">{category}</h3>
        </div>

        <div className="container container-rounded">
          <Project
            name={name}
            image={image}
            title={title}
            category={category}
            date={date}
            dribbble={dribbble}
            website={website}
            description={description}
            screenshots={screenshots}
          />
        </div>
      </div>
    );
  }
}

function NoMatch({ location }) {
  return (
    <div>
      <div className="container position-relative">
        <section className="mt-4 p-3 container-rounded position-relative rounded-lg bg-white shadow">
          <h3 className="m-1">
            The requested URL <code>{location.pathname}</code> was not found
          </h3>
        </section>
      </div>
    </div>
  );
}

export default App;