import React from 'react';
import Container from '../container';
import Sidebar from '../sidebar';
import Head from '../head';
import Footer from '../footer';
import { initGA, logPageView } from "../googleAnalytics.js";

class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    const {path, children, pageTitle, ogImage} = this.props
    return(
      <Container>
        <Head title={pageTitle} ogImage={ogImage} />
        <Sidebar />
        <main className="content">
          <div>{children}</div>
        </main>
        <Footer />
      </Container>
    )
  }
}


export default Layout
