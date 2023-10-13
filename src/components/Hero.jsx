import React from "react";
import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Headless CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatibus molestiae adipisci iusto unde optio dolorem ea
            voluptates distinctio? Magnam, accusantium minima amet consequuntur
            vero ipsa rem facilis neque distinctio.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
