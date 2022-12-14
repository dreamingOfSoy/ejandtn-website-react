import { useEffect } from 'react';

import './shop-page-style.css';
import './shop-page-queries.css';

import Header from './comps/Header';
import BIAGVinyl from './comps/products/BIAGVinyl';
import LFESCd from './comps/products/LFESCd';
import BlackBadge from './comps/products/BlackBadge';
import RedBadge from './comps/products/RedBadge';
import Footer from './comps/Footer';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function scrollToElement(e) {
    e.preventDefault();

    const href = e.target.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.querySelector(href);
    const elementPosition = element.getBoundingClientRect().top;
    const scrollTo = elementPosition + window.pageYOffset;

    if (href !== '#' && href.startsWith('#')) {
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="shop-container">
      <Header scrollToElement={scrollToElement} />

      <section className="shop-section">
        <div className="vinyl" id="vinyl">
          <h3 className="shop-h3 section-title">Vinyl</h3>
          <div className="products">
            <BIAGVinyl />
          </div>
        </div>
        <div className="cd" id="cd">
          <h3 className="shop-h3 section-title">CD</h3>
          <div className="products">
            <LFESCd />
          </div>
        </div>
        <div className="misc" id="misc">
          <h3 className="shop-h3 section-title">Misc</h3>
          <div className="products">
            <BlackBadge />
            <RedBadge />
          </div>
        </div>
      </section>

      <span
        onClick={scrollToElement}
        className="back-to-top link-scroll"
        href="#"
      >
        Back to Top
      </span>

      <Footer />
    </div>
  );
};

export default Shop;
