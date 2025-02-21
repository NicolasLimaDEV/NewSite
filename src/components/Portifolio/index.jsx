import { SectionPort, SectionCards, Card } from "./portStyle";

import Lobbo from "../../assets/LobboPet.png";
import CT from "../../assets/CTHub.png";
import EV from "../../assets/Evitrine.png";
import Brotos from "../../assets/clinicabrotos.jpg";

import ClipB from "../../assets/ClibBoard.png";
import LinkWeb from "../../assets/LinksWeb.png";
import ModernLp from "../../assets/ModerLP.png";
import InstaCat from "../../assets/instacat.jpg";

const Portifolio = () => {
  const projetosReais = [
    {
      id: 1,
      capa: Lobbo,
      name: "Lobbo Pet",
      stacks: "Figma, WordPress, Elementor, CSS, Photoshop",
      linkSite: "https://lobbo.pet",
    },
    {
      id: 2,
      capa: EV,
      name: "E-Vitrine Serviços",
      stacks: "Figma, WordPress, Elementor, CSS, Photoshop",
      linkSite: "https://evitrineservicos.com.br",
    },
    {
      id: 3,
      capa: CT,
      name: "CT Hub",
      stacks: "Figma, WordPress, HTML, CSS, Bootstrap",
      linkSite: "https://cthub.com.br",
    },
    {
      id: 4,
      capa: Brotos,
      name: "Clínica Brotos",
      stacks: "WordPress, Elementor, CSS, Figma",
      linkSite: "https://clinicabrotos.com/",
    },
  ];

  const projetosFic = [
    {
      id: 1,
      capa: ClipB,
      name: "ClipBoard Landing Page",
      stacks: "Vite, ReactJS, CSS Modules",
      linkSite: "https://clipboard-lp.vercel.app/",
    },
    {
      id: 2,
      capa: LinkWeb,
      name: "Linketree Clone",
      stacks: "Vite, ReactJS, Styled-Components",
      linkSite: "https://links-web.vercel.app/",
    },
    {
      id: 3,
      capa: ModernLp,
      name: "Modern Web Site",
      stacks: "Vite, ReactJS, Styled-Components",
      linkSite: "https://nick-landing-page.vercel.app/",
    },
    {
      id: 4,
      capa: InstaCat,
      name: "InstaCat",
      stacks: "ReactJS (API, Hooks) CSS",
      linkSite: "https://instacat.vercel.app/",
    },
  ];

  return (
    <SectionPort>
      <h1>Portifólio</h1>
      <p>
        Ao longo da minha carreira desenvolvi diversos projetos.
        <br /><br/>
        <span className="message">
          Abaixo demonstro uns dos meus trabalhos realizados!
        </span>
      </p>

      <h3>Projetos Reais</h3>

      <SectionCards>
        {projetosReais.map((item) => (
          <Card href={item.linkSite} target="_blank">
            <a href={item.linkSite} target="_blank">
              <img src={item.capa} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.stacks}</p>
            </a>
          </Card>
        ))}
      </SectionCards>

      <h3 className="projetoFic">Projetos Fictícios</h3>

      <SectionCards>
        {projetosFic.map((item) => (
          <Card>
            <a href={item.linkSite} target="_blank">
              <img src={item.capa} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.stacks}</p>
            </a>
          </Card>
        ))}
      </SectionCards>

      <div className="link-git">
        <h4>Veja mais projetos no meu GitHub</h4>
        <a href="https://github.com/nicolaslimadev" target="_blank">
          &rsaquo; Acessar GitHub
        </a>
      </div>
    </SectionPort>
  );
};

export default Portifolio;
