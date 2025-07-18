import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Sabores Doces,
          <br />
          Momentos Especiais
        </h1>
        <p>Confeitaria artesanal com receitas exclusivas e tradicionais</p>
        <div className="hero-cta">
          <a href="" className="cta-button primary">
            Nossos Doces
          </a>
          <a href="" className="cta-button secondary">
            Promoções
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Bolo decorado com flores e frutas"
          className="main-hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
