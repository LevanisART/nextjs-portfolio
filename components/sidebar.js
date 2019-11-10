import React from 'react';
import Link from 'next/link';
import { siteMeta } from '../portfolio.config';
import Nav from './nav';
import Footer from './footer';

function Sidebar () {
  return (
    <div className="sidebar float-left">
      <div className="pt-lg-4 px-lg-4 pb-lg-3 m-lg-3 p-4 m-2">
        <Link href='/'>
          <h1 className="sidebar-name">{siteMeta.name}</h1>
        </Link>
        <h2 className="sidebar-jobtitle mt-3 pt-1">{siteMeta.jobtitle}</h2>
      </div>
      
      <Nav />
    </div>
  )
}

export default Sidebar;