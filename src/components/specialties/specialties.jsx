import React from "react";
import './specialties.css'

const Specialties = () => {
    return(
        <section id="especiais" class="specialties">
            <div class="specialties-content">
        <h2>Nossas Especialidades</h2>
        <div class="specialties-grid">
          <div class="specialty-card">
            <img src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                 alt="Bolos Decorados" 
                 class="specialty-image"/>
            <div class="specialty-content">
              <h3>Bolos Decorados</h3>
              <p>Criações únicas para momentos especiais</p>
            </div>
          </div>
          <div class="specialty-card">
            <img src="https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                 alt="Doces Finos" 
                 class="specialty-image"/>
            <div class="specialty-content">
              <h3>Doces Finos</h3>
              <p>Sabores sofisticados em pequenas porções</p>
            </div>
          </div>
          <div class="specialty-card">
            <img src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                 alt="Tortas Artesanais" 
                 class="specialty-image"/>
            <div class="specialty-content">
              <h3>Tortas Artesanais</h3>
              <p>Receitas tradicionais com toque moderno</p>
            </div>
          </div>
        </div>
      </div>
        </section>
    )
}

export default Specialties