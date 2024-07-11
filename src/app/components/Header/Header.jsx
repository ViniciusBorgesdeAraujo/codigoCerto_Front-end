import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-video">
        <video className="video-bg" autoPlay loop muted>
          <source src="/assets/video/short.mp4" type="video/mp4" />
        </video>
      </div>

      <a
        href="https://chat.whatsapp.com/CDJL6tRT5apLRXW5PWqYLe"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img/whats.png"
          alt="WhatsApp"
          className="whatsapp-img"
        />
      </a>

      <div className="codigo-certo-container">
        <div className="codigo-text">
          <h1>CODIGO</h1>
        </div>

        <div className="certo-text">
          <h1>CERTO</h1>
        </div>
      </div>

      <div className="lorem-text">
        <h2>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod
        </h2>
      </div>

      <div className="entrar-contato">
        <button>Entrar em Contato</button>
      </div>
    </div>
  );
};

export default Header;
