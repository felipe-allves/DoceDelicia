import React from "react";
import "./products.css";

const Products = () => {
  return (
    <section id="produtos" class="products">
      <h2>Produtos</h2>
      <div class="product-grid">
        <div class="product-card">
          <div class="product-image">
            <img
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Bolo Red Velvet Premium"
              class="product-img"
            />
          </div>
          <h3>Bolo Red Velvet Premium</h3>
          <p class="price">R$ 89,90</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img
              src="https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Brigadeiros Gourmet"
              class="product-img"
            />
          </div>
          <h3>Brigadeiros Gourmet</h3>
          <p class="price">R$ 45,90</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Torta de Morango"
              class="product-img"
            />
          </div>
          <h3>Torta de Morango</h3>
          <p class="price">R$ 69,90</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>
        <div class="product-card">
          <div class="product-image">
            <img
              src="https://guiadacozinha.com.br/wp-content/uploads/2019/11/bomba-de-chocolate.jpg"
              alt="Torta de Morango"
              class="product-img"
            />
          </div>
          <h3>Bomba de chocolate</h3>
          <p class="price">R$ 45,90</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img
              src="https://guiadacozinha.com.br/wp-content/uploads/2020/06/receita-carolina-recheada.jpg"
              alt="Torta de Morango"
              class="product-img"
            />
          </div>
          <h3>Carolina recheada</h3>
          <p class="price">R$ 35,10</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img
              src="https://guiadacozinha.com.br/wp-content/uploads/2019/11/quindim-de-padaria.jpg"
              alt="Torta de Morango"
              class="product-img"
            />
          </div>
          <h3>Quindim</h3>
          <p class="price">R$ 15,90</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img
              src="https://guiadacozinha.com.br/wp-content/uploads/2019/10/pudim-de-padaria-receita.jpg"
              alt="Torta de Morango"
              class="product-img"
            />
          </div>
          <h3>Pudim de padaria</h3>
          <p class="price">R$ 13,90</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <div class="product-card">
          <div class="product-image">
            <img
              src="https://guiadacozinha.com.br/wp-content/uploads/2019/10/minitortinha-morango.jpg"
              alt="Cupcakes Decorados"
              class="product-img"
            />
          </div>
          <h3>Minitortinha de morango</h3>
          <p class="price">R$ 39,90</p>
          <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
