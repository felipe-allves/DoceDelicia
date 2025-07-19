import React from "react";
import "./header.css";
import "../../styles/styles.css"

const Header = ({ scrollTo }) => {
  const Header = ({ scrollTo }) => {
  const handleClick = (e, section) => {
    e.preventDefault();
    scrollTo(section);
  }}

  return (
    <>
      <header>
        <nav>
          <div className="logo">Doce Delícia</div>
          <ul className="nav-links">
            <li>
              <a href="#produtos" onClick={(e) => handleClick(e, "produtos")}>Produtos</a>
            </li>
            <li>
              <a href="#especiais" onClick={(e) => handleClick(e, "especiais")}>Especialidades</a>
            </li>
            <li>
              <a href="#sobre" onClick={(e) => handleClick(e, "sobre")}>Sobre</a>
            </li>
            <li>
              <a href="#contato" onClick={(e) => handleClick(e, "contato")}>Contato</a>
            </li>
          </ul>
          <div className="cart-icon" id="cartIcon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M20 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-count">0</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header