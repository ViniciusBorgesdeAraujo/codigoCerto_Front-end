import { FaInstagram, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  const iconsTab = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/codigocertocoders",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/codigocerto/",
    },
    { icon: <FaDiscord />, link: "http://discord.gg/y3GHwPvsMK" },
    { icon: <FaGithub />, link: "https://github.com/codigocerto" },
  ];

  return (
    <>
      <footer className="bg-secondary text-tertiary py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
            <img
              src="/assets/img/logo-white.webp"
              alt="Logo White"
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto"
            />
            <div className="text-center">
              <h2 className="font-roboto font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
                Nos Acompanhe em Nossas Redes Sociais!
              </h2>
              <div className="flex gap-6 justify-center">
                {iconsTab.map(({ icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-tertiary hover:text-primary transition-all"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <a
                href="#"
                className="font-roboto font-bold text-lg text-tertiary hover:text-primary"
              >
                Entrar em Contato
              </a>
              <a
                href="#"
                className="font-roboto font-bold text-lg text-tertiary hover:text-primary"
              >
                Trabalhe Conosco
              </a>
              <a
                href="#"
                className="font-roboto font-bold text-lg text-tertiary hover:text-primary"
              >
                Política e Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="left-0 w-full bg-red-500 py-2">
        <p className="font-roboto font-bold text-lg text-center text-tertiary">
          © 2024 Código Certo. Todos os direitos reservados. | Equipe de
          Desenvolvimento 01
        </p>
      </div>
    </>
  );
};

export default Footer;
