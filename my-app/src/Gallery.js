import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    'https://media.invisioncic.com/r268468/monthly_2022_03/2022-02-22_20-47-08.thumb.jpg.c37c996a285a89a6ebbb14d8497c2997.jpg',
    'https://media.invisioncic.com/r268468/monthly_2022_03/2022-02-14_12-01-10.thumb.jpg.6e81360eb883a91d1929ad2ca2e6dced.jpg',
    'https://media.invisioncic.com/r268468/monthly_2020_11/2020-07-28_15-15-35.thumb.jpg.d847ca4b65cd6fe00b1198c5128d8f94.jpg',
    'https://media.invisioncic.com/r268468/monthly_2020_11/2020-08-23_13-20-08.thumb.jpg.151738c3b025f9717bb32accc59c8c8c.jpg',
    'https://media.invisioncic.com/r268468/monthly_2020_11/2020-11-14_17-35-10.thumb.jpg.35ff8fed94c2b2f308c5fddcf7812791.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://content.invisioncic.com/r268468/monthly_2018_08/Vintage_Story_Worldgen24.jpg.287ee1691d6160cbde444dfa8d7761d0.jpg')`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '20px', textShadow: '2px 2px 8px #000' }}>Gallery</h1>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          padding: '30px',
          backgroundImage:
            'url(https://th.bing.com/th/id/R.5f4eab7c5300f2fcd57eb8b36bf965f7?rik=bvKDUnWudZrxLg&pid=ImgRaw&r=0)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '15px',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.7)',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          style={{
            width: '600px',
            height: '400px',
            borderRadius: '8px',
            border: '3px solid #fff',
          }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '-60px', transform: 'translateY(-50%)' }}>
          <button
            onClick={handlePrevious}
            style={{
              background: 'linear-gradient(145deg, #d4af37, #ffd700)',
              border: '2px solid #8b7500',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              padding: '15px',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            &#8592;
          </button>
        </div>
        <div style={{ position: 'absolute', top: '50%', right: '-60px', transform: 'translateY(-50%)' }}>
          <button
            onClick={handleNext}
            style={{
              background: 'linear-gradient(145deg, #d4af37, #ffd700)',
              border: '2px solid #8b7500',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              padding: '15px',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
