import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
import heroImg from './images/hero.svg';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            dolor optio obcaecati ipsum rerum! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ducimus quo dolor optio obcaecati
            ipsum rerum! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus quo dolor optio obcaecati ipsum rerum!
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
