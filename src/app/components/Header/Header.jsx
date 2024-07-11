import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-video">
        <video className="video-bg" autoPlay loop muted>
          <source src="/assets/video/short.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="whatsapp-icon"></div>

      <div className="codigo-text">
        <h1>CODIGO</h1>
      </div>

      <div className="certo-text">
        <h1>CERTO</h1>
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
