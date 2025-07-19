import React from "react";
import './contact.css'

const Contact = () => {
    return(
        <section id="contato" class="contact">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Entre em Contato</h2>
          <div class="contact-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <p>(11) 1234-5678</p>
          </div>
          <div class="contact-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <p>contato@docedelicia.com</p>
          </div>
          <div class="contact-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <p>Rua dos Doces, 123 - São Paulo, SP</p>
          </div>
        </div>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" required/>
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" required/>
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit" class="cta-button primary">Enviar Mensagem</button>
        </form>
      </div>
    </section>
    )
}

export default Contact