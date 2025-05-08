import React, { useEffect } from 'react';
import './Info.css';

function Info() {
  useEffect(() => {

    const handleScroll = () => {
      const elements = document.querySelectorAll('.info-section');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="info">
      <h1 className="page-title">Vintage Story</h1>

      <section className="info-section">
        <img
          src="https://content.invisioncic.com/r268468/monthly_2018_08/Vintage_Story_Worldgen24.jpg.287ee1691d6160cbde444dfa8d7761d0.jpg"
          alt="Vintage Story World"
          className="info-image"
        />
        <div className="info-text">
          <h2>About Vintage Story</h2>
          <p>
            Vintage Story is a survival game inspired by the desire for deeper, more meaningful gameplay. It combines elements of exploration, crafting, and survival, all set in a beautifully crafted, procedurally generated world.
          </p>
        </div>
      </section>

      <section className="info-section">
        <img
          src="https://media.invisioncic.com/r268468/monthly_2022_03/2022-02-22_20-47-08.thumb.jpg.c37c996a285a89a6ebbb14d8497c2997.jpg"
          alt="Exploration in Vintage Story"
          className="info-image"
        />
        <div className="info-text">
          <h2>Exploration and Adventure</h2>
          <p>
            Embark on an adventure across diverse biomes and unearth ancient ruins. The procedurally generated terrain ensures that no two adventures are the same.
          </p>
        </div>
      </section>

      <section className="info-section">
        <img
          src="https://media.invisioncic.com/r268468/monthly_2020_11/2020-11-14_17-35-10.thumb.jpg.35ff8fed94c2b2f308c5fddcf7812791.jpg"
          alt="Crafting in Vintage Story"
          className="info-image"
        />
        <div className="info-text">
          <h2>Crafting and Creativity</h2>
          <p>
            Craft tools, weapons, and more to survive the environment and discover your creativity in building and crafting unique items. Vintage Story’s crafting system is both deep and rewarding.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Info;
