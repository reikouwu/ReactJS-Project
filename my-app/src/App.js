import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { GiMountainCave } from 'react-icons/gi';
import './App.css';


const App = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showSettlementDetails, setShowSettlementDetails] = useState([false, false, false]);

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

  const handleJoinNowClick = async () => {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const characterName = `${data.results[0].name.first} ${data.results[0].name.last}`;
      alert(`Welcome to Alathra, ${characterName}!`);
    } catch (error) {
      alert('Failed to generate character name. Please try again later.');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <GiMountainCave size={40} />
          <span>Alathra</span>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <FaHome size={25} />
            <a href="#">Home</a>
          </li>
          <li className="navbar-item dropdown">
            <div onClick={toggleInfoDropdown} className="dropdown-toggle">
              <FaInfoCircle size={25} />
              <span>Info</span>
            </div>
            {isInfoOpen && (
              <div className="dropdown-menu dropdown-animation" style={{ position: 'absolute', zIndex: 1000 }}>
                <a href="#about">About Alathra</a>
                <a href="#history">History</a>
                <a href="#contact">Contact Us</a>
              </div>
            )}
          </li>
        </ul>
      </nav>

      <section
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(13, 27, 42, 0.5), rgba(27, 38, 59, 0.5)), linear-gradient(rgba(0, 47, 75, 0.2), rgba(0, 47, 75, 0.2)), url(${image})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Alathra</h1>
          <p className="hero-description">Embark on a journey to explore the lore and mysteries of a fantastical world.</p>
          <button className="hero-button" onClick={scrollToBottom}>Discover More</button>
        </div>
      </section>

      <section className="features-section">
        <h2 className="features-title">FEATURES</h2>
        <p className="features-description">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
        <div className="features-list">
          <div className="feature-item">
            <h3>01</h3>
            <h4>Feature Name</h4>
            <p>I'm a paragraph. Click here to add your text and edit me.</p>
          </div>
          <div className="feature-item">
            <h3>02</h3>
            <h4>Feature Name</h4>
            <p>I'm a paragraph. Click here to add your text and edit me.</p>
          </div>
          <div className="feature-item">
            <h3>03</h3>
            <h4>Feature Name</h4>
            <p>I'm a paragraph. Click here to add your text and edit me.</p>
          </div>
        </div>
      </section>

      <section className="map-section">
        <h2 className="map-title">Explore Alathra</h2>
        <div id="map" className="map-container" style={{ height: '800px', width: '100%' }}>
          <img src="https://alathra.com/media/images/mapdetailed.png" alt="Map of Alathra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      <section className="settlements-section">
        <h2 className="settlements-title">Settlements</h2>
        <div className="settlements-list">
          {['Settlement One', 'Settlement Two', 'Settlement Three'].map((settlement, index) => (
            <div key={index} className="settlement-card">
              <div className="settlement-image-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiKeTsm26jLOx1RQhXGkRSPWNj2tCeMKdUA&s"
                  alt={settlement}
                  className="settlement-image"
                />
              </div>
              <div className="settlement-content">
                <h3>{settlement}</h3>
                <p>
                  {showSettlementDetails[index] ? (
                    index === 0 ? 'Settlement One is known for its beautiful landscapes and peaceful environment.' :
                      index === 1 ? 'Settlement Two is famous for its bustling market and cultural diversity.' :
                        'Settlement Three is a coastal gem, known for its scenic beaches and maritime charm.'
                  ) : (
                    index === 0 ? 'Settlement One: A peaceful and scenic area.' :
                      index === 1 ? 'Settlement Two: A bustling market town.' :
                        'Settlement Three: A coastal village.'
                  )}
                </p>
                <button
                  className="settlement-button"
                  onClick={() => {
                    let newShowDetails = [...showSettlementDetails];
                    newShowDetails[index] = !newShowDetails[index];
                    setShowSettlementDetails(newShowDetails);
                  }}
                >
                  {showSettlementDetails[index] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="join-now-section">
        <h2 className="join-now-title">Join Alathra Today!</h2>
        <button className="join-now-button" onClick={handleJoinNowClick}>Join Now</button>
      </section>

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
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div className="row">
            Copyright © 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;