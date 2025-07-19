import React from "react";
import "./history.css";

const History = () => {
  return (
    <section  id="sobre" className="history">
      <div className="history-content">
        <div>
          <h2>Nossa História</h2>
          <p>
            A Doce Delícia nasceu em 2010, da paixão da confeiteira Maria pela
            arte da confeitaria. O que começou como um pequeno sonho em uma
            cozinha residencial, hoje se tornou uma das confeitarias mais
            queridas da cidade.
          </p>
          <p>
            Com receitas passadas de geração em geração e técnicas modernas
            aperfeiçoadas em cursos internacionais, criamos uma fusão única de
            sabores tradicionais e inovadores.
          </p>
          <p>
            Nossa missão é proporcionar momentos de felicidade através dos
            nossos doces, mantendo sempre o compromisso com a qualidade e o
            atendimento personalizado que nos tornou referência no mercado.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Nossa História"
          class="history-image"
        ></img>
      </div>
    </section>
  );
};

export default History;
