import React from 'react';
import Container from '../container';
import Sidebar from '../sidebar';
import Head from '../head';
import Footer from '../footer';

function Layout ({ path, children, pageTitle, ogImage }) {
  return (
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


export default Layout
