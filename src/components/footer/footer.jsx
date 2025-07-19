import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h4>Sobre Nós</h4>
        <p>Confeitaria artesanal com amor em cada detalhe.</p>
      </div>
      <div class="footer-section">
        <h4>Contato</h4>
        <p>Email: contato@docedelicia.com</p>
        <p>Tel: (11) 1234-5678</p>
      </div>
      <div class="footer-section">
        <h4>Redes Sociais</h4>
        <div class="social-links">
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">Facebook</a>
          <a href="#" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Doce Delícia. Todos os direitos reservados.</p>
    </div>
  </footer>
    )
}

export default Footer