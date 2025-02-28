import { Link } from "react-router-dom";
import { AllPortMain, ContainerCards, PortCard } from "./styles/AllPortifolioStyle";

import altaPressao from "../assets/portfolio/alta-pressao.webp";
import artefaco from "../assets/portfolio/artefaco.webp";
import brotos from "../assets/portfolio/brotos.webp";
import ClipBoard from "../assets/portfolio/ClibBoard.webp";
import OlhosGrandes from "../assets/portfolio/clinica-dos-olhos.webp";
import CostaCarvalho from "../assets/portfolio/costa-carvalho.webp";
import CT from "../assets/portfolio/CTHub.webp";
import DaniGrecco from "../assets/portfolio/daniela-grecco.webp";
import Duster from "../assets/portfolio/duster.webp";
import Elip from "../assets/portfolio/elip.webp";
import Ethos from "../assets/portfolio/ethos.webp";
import EV from "../assets/portfolio/evitrineservicos.webp";
import Gera from "../assets/portfolio/gera-energia.webp";
import InstaCat from "../assets/portfolio/instacat.webp";
import Kitpet from "../assets/portfolio/kitpet.webp";
import LinksWeb from "../assets/portfolio/LinksWeb.webp";
import Lobbo from "../assets/portfolio/lobbo-pet.webp";
import Medilab from "../assets/portfolio/medilab.webp";
import Modern from "../assets/portfolio/ModerLP.webp";
import Multipower from "../assets/portfolio/multipower.webp";
import Olhar from "../assets/portfolio/olhar-em-tudo.webp";
import Olympus from "../assets/portfolio/olympus.webp";
import Omega from "../assets/portfolio/omega.webp";
import PedalPlace from "../assets/portfolio/pedal-place.webp";
import Psico from "../assets/portfolio/psico.webp";
import Rec from "../assets/portfolio/rec.webp";
import Reconnect from "../assets/portfolio/reconnect.webp";
import ReginaCele from "../assets/portfolio/regina-cele.webp";
import ReGrecco from "../assets/portfolio/renatta-grecco.webp";
import Renovare from "../assets/portfolio/renovare.webp";
import Retratecc from "../assets/portfolio/retratecc.webp";
import Robot from "../assets/portfolio/robot-smart.webp";
import Vistoriza from "../assets/portfolio/vistoriza.webp";
import Wexgrow from "../assets/portfolio/wexgrow.webp";

export default function Portifolio() {
  const projetos = [
    {
      id: 1,
      capa: altaPressao,
      name: "Alta Pressão",
      stacks: "WordPress, Elementor",
      linkSite:
        "https://www.altapressaorio.com.br/venda-e-locacao-de-gases-industriais-de-alta-qualidade/",
    },
    {
      id: 2,
      capa: artefaco,
      name: "Artefaço",
      stacks: "WordPress, Elementor",
      linkSite: "https://artefaco.com.br/",
    },
    {
      id: 3,
      capa: brotos,
      name: "Clínica Brotos",
      stacks: "Figma, WordPress, CSS, Elementor",
      linkSite: "https://clinicabrotos.com/",
    },
    {
      id: 4,
      capa: ClipBoard,
      name: "ClipBoard Landing Page",
      stacks: "ReactJS, CSS Modules",
      linkSite: "https://clipboard-lp.vercel.app/",
    },
    {
      id: 5,
      capa: OlhosGrandes,
      name: "Clínica dos Olhos",
      stacks: "WordPress, Elementor, CSS",
      linkSite:
        "https://www.clinicadeolhoscampogrande.com.br/clinica-oftalmologica-de-excelencia-em-campo-grande/",
    },
    {
      id: 6,
      capa: CostaCarvalho,
      name: "Costa Carvalho",
      stacks: "WordPress, Elementor, CSS, Figma",
      linkSite: "https://clinicavetcostacarvalho.com.br/",
    },
    {
      id: 7,
      capa: CT,
      name: "CT Hub",
      stacks: "WordPress, HTML Bootstrap, CSS,",
      linkSite: "https://cthub.com.br/",
    },
    {
      id: 8,
      capa: DaniGrecco,
      name: "Dra. Daniela Grecco",
      stacks: "WordPress, Elementor, CSS, Figma",
      linkSite: "https://dradanielagrecco.com.br/",
    },
    {
      id: 9,
      capa: Duster,
      name: "Duster Festas",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://dusterfestas.com.br/lp/cake-board-no-atacado/",
    },
    {
      id: 10,
      capa: Elip,
      name: "Elip Odontologia",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://elipodontologia.com.br/",
    },
    {
      id: 11,
      capa: Ethos,
      name: "Ethos Brasil",
      stacks: "WordPress, Elementor, CSS, Figma",
      linkSite: "http://ethosbrasil.com.br/",
    },
    {
      id: 12,
      capa: EV,
      name: "E-Vitrine",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://evitrineservicos.com.br/",
    },
    {
      id: 13,
      capa: Gera,
      name: "Gera Energia",
      stacks: "WordPress, Elementor, CSS",
      linkSite:
        "https://grupogeraenergia.com.br/grupos-geradores-a-gas-natural-de-potencias-variadas/",
    },
    {
      id: 14,
      capa: InstaCat,
      name: "Insta Cat",
      stacks: "ReactJS (API, Hooks), CSS",
      linkSite: "https://instacat.vercel.app/",
    },
    {
      id: 15,
      capa: Kitpet,
      name: "KitPet Alphaville",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://kitpetalphaville.com.br",
    },
    {
      id: 16,
      capa: LinksWeb,
      name: "Linktree Clone",
      stacks: "ReactJS, Styled-Components",
      linkSite: "https://links-web.vercel.app/",
    },
    {
      id: 17,
      capa: Lobbo,
      name: "Lobbo Pet App",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://lobbo.pet/",
    },
    {
      id: 18,
      capa: Medilab,
      name: "MediLab",
      stacks: "WordPress, Elementor, CSS",
      linkSite:
        "https://medilab.net.br/software-para-profissionais-de-radiologia/",
    },
    {
      id: 19,
      capa: Modern,
      name: "LP Modern",
      stacks: "ReactJS, Styled-Components",
      linkSite: "https://nick-landing-page.vercel.app/",
    },
    {
      id: 20,
      capa: Multipower,
      name: "Multipower",
      stacks: "WordPress, Elementor, CSS",
      linkSite:
        "https://multipowergeradores.com.br/lp/locacoes-de-geradores-a-diesel-de-alta-potencia-e-acessorios/",
    },
    {
      id: 21,
      capa: Olhar,
      name: "Olhar em tudo",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://olharemtudo.com.br/",
    },
    {
      id: 22,
      capa: Olympus,
      name: "Olympus Shop",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://olympushopbr.com.br/encontre-o-seu-cavalo-ideal/",
    },
    {
      id: 23,
      capa: Omega,
      name: "Omega Nordeste",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://omeganordeste.com.br/baterias-automotivas-mossoro-rn/",
    },
    {
      id: 24,
      capa: PedalPlace,
      name: "Pedal Place",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://www.pedalplace.com.br/",
    },
    {
      id: 25,
      capa: Psico,
      name: "Psico Vila Olímpia",
      stacks: "PHP, CSS",
      linkSite: "https://www.psicovilaolimpia.com.br/orientacao-profissional",
    },
    {
      id: 26,
      capa: Rec,
      name: "Faz um REC",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://lp.fazumrec.com.br/",
    },
    {
      id: 27,
      capa: Reconnect,
      name: "Recconect",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://reconnectph.com.br/",
    },
    {
      id: 28,
      capa: ReginaCele,
      name: "Dra. Regina Cele",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://drareginacele.com.br/",
    },
    {
      id: 29,
      capa: ReGrecco,
      name: "Dra. Renatta Grecco",
      stacks: "WordPress, Elementor, CSS, Figma",
      linkSite: "http://dev.evitrineservicos.com.br/",
    },
    {
      id: 30,
      capa: Renovare,
      name: "Renovare",
      stacks: "WordPress, Elementor, CSS",
      linkSite:
        "https://www.renovaremedlab.com.br/laboratorio-de-exames-clinicos/",
    },
    {
      id: 31,
      capa: Retratecc,
      name: "Retratecc",
      stacks: "WordPress, Elementor, CSS",
      linkSite: "https://retratecc.com.br/pecas-para-linha-amarela/",
    },
    {
      id: 32,
      capa: Robot,
      name: "Robot Smart",
      stacks: "WordPress, Elementor, CSS",
      linkSite:
        "https://robotsmart.com.br/lps/assistencia-de-robos-industriais/",
    },
    {
      id: 33,
      capa: Vistoriza,
      name: "Vistoriza",
      stacks: "WordPress, Elementor, CSS",
      linkSite:
        "https://grupovistoriza.com.br/servicos_terceirizacao/servico-de-portaria/",
    },
    {
      id: 34,
      capa: Wexgrow,
      name: "Wexgrow",
      stacks: "WordPress, Elementor, CSS, Figma",
      linkSite: "https://wexgrow.com.br/",
    },
  ];

  return (
    <AllPortMain>
      <div className="back-page">
        <Link className="btn-back-page" to="/">
          Voltar para página inicial
        </Link>
      </div>
      <h1>Portfólio</h1>
      <p>
        Aqui está um pouco dos trabalhos que já realizei, ao longo da minha
        carreira.
      </p>

      <ContainerCards>
        {projetos.map((item) => (
          <PortCard href={item.linkSite} target="_blank">
            <a href={item.linkSite} target="_blank">
              <img src={item.capa} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.stacks}</p>
            </a>
          </PortCard>
        ))}
      </ContainerCards>
    </AllPortMain>
  );
}
