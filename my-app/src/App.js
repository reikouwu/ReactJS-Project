import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { GiMountainCave } from 'react-icons/gi';
import Info from './Info';
import Gallery from './Gallery';
import './App.css';

const App = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [showSettlementDetails, setShowSettlementDetails] = useState([false, false, false]);
  const [characterData, setCharacterData] = useState(null);

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

  const handleJoinNowClick = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const characterName = `${data.results[0].name.first} ${data.results[0].name.last}`;
      setCharacterData(characterName);
      alert(`Welcome to Alathra, ${characterName}!`);
    } catch (error) {
      alert('Failed to generate character name. Please try again later.');
    }
  };

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar fantasy-navbar">
          <div className="navbar-logo">
            <GiMountainCave size={40} className="navbar-icon bounce-animation" />
            <span className="navbar-title glow-animation">Alathra</span>
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
                <div className="dropdown-menu dropdown-animation fantasy-dropdown swing-in-animation" style={{ position: 'absolute', zIndex: 1000 }}>
                  <Link to="/info">Info</Link>
                  <Link to="/gallery">Gallery</Link>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Animated Background Elements */}
        <div className="floating-stars twinkling"></div>
        <div className="floating-glow pulse"></div>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section
                className="hero-section fantasy-hero zoom-in-animation"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(13, 27, 42, 0.5), rgba(27, 38, 59, 0.5)), linear-gradient(rgba(0, 47, 75, 0.2), rgba(0, 47, 75, 0.2)), url(${image})` }}
              >
                <div className="hero-content">
                  <h1 className="hero-title glow-animation">Welcome to Alathra</h1>
                  <p className="hero-description fade-in-animation">Embark on a journey to explore the lore and mysteries of a fantastical world.</p>
                  <button className="hero-button shimmer-effect" onClick={scrollToBottom}>Discover More</button>
                </div>
              </section>

              {/* Features Section */}
              <section className="features-section fantasy-features">
                <h2 className="features-title glow-animation">FEATURES</h2>
                <div className="features-list">
                  <div className="feature-item slide-in-left">
                    <h3>01</h3>
                    <h4>Explore Vast Landscapes</h4>
                    <p>Discover diverse terrains and hidden secrets.</p>
                  </div>
                  <div className="feature-item slide-in-right">
                    <h3>02</h3>
                    <h4>Build Your Legacy</h4>
                    <p>Create and customize your own settlements.</p>
                  </div>
                  <div className="feature-item slide-in-left">
                    <h3>03</h3>
                    <h4>Engage in Epic Quests</h4>
                    <p>Embark on adventures and complete challenging missions.</p>
                  </div>
                </div>
              </section>

              {/* Map Section */}
              <section className="map-section">
                <h2 className="map-title glow-animation">Explore Alathra</h2>
                <div id="map" className="map-container fantasy-map scale-up-animation" style={{ height: '800px', width: '100%' }}>
                  <img src="https://alathra.com/media/images/mapdetailed.png" alt="Map of Alathra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </section>

              {/* Settlements Section */}
              <section className="settlements-section">
                <h2 className="settlements-title glow-animation">Settlements</h2>
                <div className="settlements-list">
                  {[
                    { name: 'Eldoria', img: 'https://inanage.com/wp-content/uploads/2024/08/vintagestory_betterruins.jpg?w=1000' },
                    { name: 'Rivermoor', img: 'https://media.invisioncic.com/r268468/monthly_2022_03/823742002_Vintagestory2022-03-1220-41-23-24.jpg.f82e516768168a3f4fdbdf3efff2ba4c.jpg' },
                    { name: 'Stormhold', img: 'https://uploads.golmedia.net/uploads/articles/article_media/6119340881662484751gol1.jpg' }
                  ].map((settlement, index) => (
                    <div key={index} className="settlement-card fantasy-card fade-in-animation">
                      <div className="settlement-image-container">
                        <img
                          src={settlement.img}
                          alt={settlement.name}
                          className="settlement-image"
                        />
                      </div>
                      <div className="settlement-content">
                        <h3>{settlement.name}</h3>
                        <p>
                          {showSettlementDetails[index] ? (
                            index === 0 ? 'Eldoria is known for its beautiful landscapes and peaceful environment.' :
                              index === 1 ? 'Rivermoor is famous for its bustling market and cultural diversity.' :
                                'Stormhold is a coastal gem, known for its scenic beaches and maritime charm.'
                          ) : (
                            index === 0 ? 'Eldoria: A peaceful and scenic area.' :
                              index === 1 ? 'Rivermoor: A bustling market town.' :
                                'Stormhold: A coastal village.'
                          )}
                        </p>
                        <button
                          className="settlement-button shimmer-effect"
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

              {/* Join Now Section */}
              <section className="join-now-section fantasy-join">
                <h2 className="join-now-title glow-animation">Join Alathra Today!</h2>
                <button className="join-now-button shimmer-effect" onClick={handleJoinNowClick}>Join Now</button>
                {characterData && <p className="character-name fade-in-animation">Welcome, {characterData}, to the adventure!</p>}
              </section>
            </>
          } />
          <Route path="/info" element={<Info />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        {/* Footer */}
        <footer className="footer fantasy-footer" id="footer">
          <div className="footer-content">
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
    </Router>
  );
};

export default App;