import { CardContent, Contratacao, SocialInfo, LinksItens } from "./leftStyle";
import { TbWorld } from "react-icons/tb";
import { FaLinkedinIn, FaGithub, FaBehance, FaYoutube } from "react-icons/fa";

const Left = () => {
  const links = [
    {
      id: 1,
      name: "Linkedln",
      icon: <FaLinkedinIn />,
      linkUrl: "https://linkedin.com/in/nicolaslimadev",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub />,
      linkUrl: "https://github.com/nicolaslimadev",
    },
    {
      id: 3,
      name: "Behance",
      icon: <FaBehance />,
      linkUrl: "https://www.behance.net/nicolaslima7",
    },
    {
      id: 4,
      name: "Youtube",
      icon: <FaYoutube />,
      linkUrl: "https://www.youtube.com/channel/UC5_OejoYarsFy2tGA52_etg",
    },
  ];

  return (
    <CardContent>
      <div className="title">
        <img
          src="https://github.com/nicolaslimadev.png"
          alt="Foto de Nicolas"
        />

        <div className="title-infos">
          <h1>Nicolas Lima</h1>
          <h3>Desenvolvedor FullStack</h3>

          <div className="infos">
            <p>
              {" "}
              <TbWorld color="#19c994" /> São Paulo, Brasil
            </p>

            {/*
            <Contratacao>
              <div></div>
              <p>disponível para contratação</p>
            </Contratacao> 
            */}
          </div>
        </div>
      </div>

      <SocialInfo>
        <h3>FIT - Faculdade Impacta</h3>
        <h4>
          Análise e Desenvolvimento de Sistemas <br />
          <span>5° Semestre</span>
        </h4>

        <LinksItens>
          {links.map((item) => (
            <button key={item.id}>
              <a href={item.linkUrl} target="_blank">
                <span>{item.icon}</span>
                {item.name}
              </a>
            </button>
          ))}
        </LinksItens>
      </SocialInfo>
    </CardContent>
  );
};

export default Left;
