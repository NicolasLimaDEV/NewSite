import { Stacks, SkillsIcons } from "./habilidadesStyle";

import iconJS from "../../assets/icones/js.png";
import iconBS from "../../assets/icones/bootstrap.png";
import iconReact from "../../assets/icones/react.svg";
import iconSC from "../../assets/icones/styledcomponents.svg";
import iconGIT from "../../assets/icones/Git_icon.svg.png";
import iconFig from "../../assets/icones/figma.png";
import iconWP from "../../assets/icones/wordpress.png";
import iconSA from "../../assets/icones/sass.png";
import iconEle from "../../assets/icones/elementor.png";
import iconNode from "../../assets/icones/node-icon.png";
import iconJava from "../../assets/icones/java-icon.webp";
import iconSpring from '../../assets/icones/spring-logo.png'

const Habilidades = () => {
  //Skills API
  const skills = [
    {
      id: 1,
      icon: iconJS,
      name: "Javascript",
    },
    {
      id: 2,
      icon: iconNode,
      name: "NodeJS",
    },
    {
      id: 3,
      icon: iconReact,
      name: "ReactJS",
    },
    {
      id: 4,
      icon: iconJava,
      name: "JAVA"
    },
    {
      id: 5,
      icon: iconSpring,
      name: "Spring Boot"
    },
    {
      id: 6,
      icon: iconBS,
      name: "Bootstrap",
    },
    {
      id: 7,
      icon: iconSA,
      name: "SASS",
    },
    {
      id: 8,
      icon: iconSC,
      name: "Styled-Components",
    },
    {
      id: 9,
      icon: iconGIT,
      name: "GIT",
    },
    {
      id: 10,
      icon: iconFig,
      name: "Figma",
    },
    {
      id: 11,
      icon: iconWP,
      name: "WordPress",
    },
    {
      id: 12,
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
