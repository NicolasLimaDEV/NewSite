import { Stacks, SkillsIcons } from "./habilidadesStyle";

import iconHTML from '../../assets/icones/html-5.png'
import iconCSS from '../../assets/icones/css-3.png'
import iconJS from '../../assets/icones/js.png'
import iconBS from '../../assets/icones/bootstrap.png'
import iconReact from '../../assets/icones/react.svg'
import iconSC from '../../assets/icones/styledcomponents.svg'
import iconGIT from '../../assets/icones/Git_icon.svg.png'
import iconFig from '../../assets/icones/figma.png'
import iconWP from '../../assets/icones/wordpress.png'
import iconSA from '../../assets/icones/sass.png'
import iconEle from '../../assets/icones/elementor.png'

const Habilidades = () => {
  //Skills API
  const skills = [
    {
      id: 1,
      icon: iconHTML,
      name: "HTML",
    },
    {
      id: 2,
      icon: iconCSS,
      name: "CSS",
    },
    {
      id: 3,
      icon: iconJS,
      name: "Javascript",
    },
    {
      id: 4,
      icon: iconBS,
      name: "Bootstrap",
    },
    {
      id: 5,
      icon: iconReact,
      name: "ReactJS",
    },
    {
      id: 6,
      icon: iconSA,
      name: "SASS",
    },
    {
      id: 7,
      icon: iconSC,
      name: "Styled-Components",
    },
    {
      id: 8,
      icon: iconGIT,
      name: "GIT",
    },
    {
      id: 9,
      icon: iconFig,
      name: "Figma",
    },
    {
      id: 10,
      icon: iconWP,
      name: "WordPress",
    },
    {
      id: 11,
      icon: iconEle,
      name: "Elementor",
    },
  ];

  return (
    <Stacks>
      <h1>Minhas habilidades</h1>

      <SkillsIcons>
        {skills.map((item) => (
          <div className="icon_item">
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </SkillsIcons>
    </Stacks>
  );
};

export default Habilidades;
