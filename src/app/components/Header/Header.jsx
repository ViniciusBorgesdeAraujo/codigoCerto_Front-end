import React from "react";

const Header = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute left-0 top-0 w-full h-screen overflow-hidden -z-10">
        <video
          className="min-w-full min-h-full w-auto h-auto object-cover"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src="/assets/video/short.mp4" type="video/mp4" />
        </video>
      </div>

      <a
        href="https://chat.whatsapp.com/CDJL6tRT5apLRXW5PWqYLe"
        className="fixed right-[2vw] bottom-[2vh] z-50 cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/img/whats.png" alt="WhatsApp" className="w-20 h-20" />
      </a>

      <div className="flex justify-center w-full relative mb-4">
        <div>
          <h2 className="font-turret md:text-[8vw] leading-[0.8] flex items-center justify-center text-center text-tertiary mr-[0.1vw] sm:text-[7vw] text-[9vw]">
            CODIGO
          </h2>
        </div>

        <div>
          <h2 className="font-turret text-[8vw] leading-[0.8] flex items-center justify-center text-center text-tertiary mr-[0.1vw] font-thin text-transparent stroke-text">
            CERTO
          </h2>
        </div>
      </div>

      <div>
        <h2 className="font-roboto font-bold text-[30px] leading-[1.2] text-center text-tertiary mb-2">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod
        </h2>
      </div>

      <div className="flex justify-center items-center text-center mt-4 mb-8 z-50">
        <button className="bg-tertiary font-roboto text-secondary py-4 px-12 border-none rounded-[10px] cursor-pointer transition-colors duration-300 ease-in-out text-[1.5vw] hover:bg-primary hover:text-tertiary">
          Entrar em Contato
        </button>
      </div>
    </section>
  );
};

export default Header;
