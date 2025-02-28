import { SectionPort, SectionCards, Card } from "./portStyle";

import { Link } from 'react-router-dom'

import Wexgrow from '../../assets/portfolio/wexgrow.webp'
import LinksWeb from '../../assets/portfolio/LinksWeb.webp'
import EV from '../../assets/portfolio/evitrineservicos.webp'
import altaPressao from '../../assets/portfolio/alta-pressao.webp'

const Portifolio = () => {
  const projetosReais = [
    {
      id: 1,
      capa: Wexgrow,
      name: "Wexgrow",
      stacks: "Figma, WordPress, Elementor, CSS",
      linkSite: "https://wexgrow.com.br",
    },
    {
      id: 2,
      capa: LinksWeb,
      name: "Links Web",
      stacks: "ReactJS, Styled-Components",
      linkSite: "https://links-web.vercel.app/",
    },
    {
      id: 3,
      capa: EV,
      name: "E-Vitrine",
      stacks: "WordPress, CSS, Elementor",
      linkSite: "https://evitrineservicos.com.br",
    },
    {
      id: 4,
      capa: altaPressao,
      name: "Alta Pressão",
      stacks: "WordPress, Elementor",
      linkSite: "https://www.altapressaorio.com.br/venda-e-locacao-de-gases-industriais-de-alta-qualidade/",
    },
  ];

  return (
    <SectionPort>
      <h1>Portfólio</h1>
      <p>
        Ao longo da minha carreira desenvolvi diversos projetos.
        <br /><br/>
        <span className="message">
          Abaixo demonstro uns dos meus trabalhos realizados!
        </span>
      </p>

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

      <Link className="btn-all-portifolio" to="/portifolio">Ver todos os projetos</Link>

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
