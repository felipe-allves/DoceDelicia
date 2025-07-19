import React from "react";
import "./benefits.css";

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="benefit-item">
        <svg
          className="benefit-icon"
          viewBox="0 0 24 24"
          width="40"
          height="40"
        >
          <path
            d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
          />
        </svg>
        <h3>Ingredientes Selecionados</h3>
        <p>100% naturais e frescos</p>
      </div>
      <div className="benefit-item">
        <svg
          className="benefit-icon"
          viewBox="0 0 24 24"
          width="40"
          height="40"
        >
          <path
            d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
          />
        </svg>
        <h3>Entrega Express</h3>
        <p>Em até 2 horas</p>
      </div>
      <div className="benefit-item">
        <svg
          className="benefit-icon"
          viewBox="0 0 24 24"
          width="40"
          height="40"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
          />
        </svg>
        <h3>Satisfação Garantida</h3>
        <p>Qualidade artesanal</p>
      </div>
    </section>
  );
};

export default Benefits;
