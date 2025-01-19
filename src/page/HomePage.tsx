import React from 'react';
import TopBar from '../component/molecule/TopBar';
import './HomePage.css';
import AboutUs from '../component/molecule/AboutUs';
import Products from '../component/molecule/Products';
import Contact from '../component/molecule/Contact';

function HomePage() {
  return (
    <div className="container-fluid home-container">     
        <TopBar />     
      <div className="row m-0 p-0">
        <AboutUs />
      </div>
      <div className="row">
        <Products/>
      </div>
      <div className="row">
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
