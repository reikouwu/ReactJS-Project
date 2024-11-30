import React, { useState } from 'react';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { GiMountainCave } from 'react-icons/gi';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Gallery from './Gallery';
import Info from './Info';


const App = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const image = 'https://content.invisioncic.com/r268468/monthly_2018_08/Vintage_Story_Worldgen24.jpg.287ee1691d6160cbde444dfa8d7761d0.jpg';

  const toggleInfoDropdown = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    setNewsletterEmail('');
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <GiMountainCave size={40} />
            <span>Alathra</span>
          </div>
          <ul className="navbar-links">
            <li className="navbar-item">
              <FaHome size={25} />
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item dropdown">
              <div onClick={toggleInfoDropdown} className="dropdown-toggle">
                <FaInfoCircle size={25} />
                <span>Info</span>
              </div>
              {isInfoOpen && (
                <div className="dropdown-menu dropdown-animation" style={{ position: 'absolute', zIndex: 1000 }}>
                  <Link to="/#about">About Alathra</Link>
                  <Link to="/#history">History</Link>
                  <Link to="/#contact">Contact Us</Link>
                  <Link to="/gallery">Gallery</Link>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section
                  className="hero-section"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(13, 27, 42, 0.5), rgba(27, 38, 59, 0.5)), linear-gradient(rgba(0, 47, 75, 0.2), rgba(0, 47, 75, 0.2)), url(${image})` }}
                >
                  <div className="hero-content">
                    <h1 className="hero-title">Welcome to Alathra</h1>
                    <p className="hero-description">
                      Embark on a journey to explore the lore and mysteries of a fantastical world.
                    </p>
                    <button className="hero-button" onClick={scrollToBottom}>
                      Discover More
                    </button>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
         <Route path="/info" element={<Info />} />
</Routes>

        <footer className="footer" id="footer">
          <div className="footer">
            <div className="row">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-youtube"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
            </div>

            <div className="row">
              <ul>
                <li><Link to="/#contact">Contact us</Link></li>
                <li><Link to="/#services">Our Services</Link></li>
                <li><Link to="/#privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/#terms">Terms & Conditions</Link></li>
                <li><Link to="/#career">Career</Link></li>
              </ul>
            </div>

            <div className="row">
              Copyright © 2041 Inferno - All rights reserved
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
