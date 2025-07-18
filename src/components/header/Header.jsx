import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Doce Delícia</h1>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="">Início</a>
            </li>
            <li>
              <a href="">Produtos</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
          <div className="cart-icon" id="cartIcon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M20 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-count">0</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
