import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">Doce Delícia</div>
          <ul className="nav-links">
            <li>
              <a href="">Produtos</a>
            </li>
            <li>
              <a href="">Especiais</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
          <div class="cart-icon" id="cartIcon">
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
            <span class="cart-count">0</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header