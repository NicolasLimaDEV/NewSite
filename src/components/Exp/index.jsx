import { ExpContainer, ExpCardContent, ExpoCard } from "./expStyle";

import LogoCT from "../../assets/cthublogo.png";
import LogoEV from "../../assets/evitrinelogo.png";
import LogoID from "../../assets/integracao-branco.webp";

const Exp = () => {
  return (
    <ExpContainer>
      <h1>Experiência</h1>

      <ExpCardContent>
        <ExpoCard>
          <div className="card-left">
            <img src={LogoCT} alt="Logo CT Hub" />
          </div>

          <div className="card-right">
            <h1>CT Hub</h1>
            <h3>Desenvolvedor Web</h3>
            <p>MAI de 2022 - OUT de 2022</p>
          </div>
        </ExpoCard>

        <ExpoCard>
          <div className="card-left">
            <img src={LogoEV} alt="Logo E-Vitrine Marketing" />
          </div>

          <div className="card-right">
            <h1>E-Vitrine Marketing</h1>
            <h3>Desenvolvedor Web</h3>
            <p>JAN de 2023</p>
          </div>
        </ExpoCard>

        <ExpoCard>
          <div className="card-left">
            <img className="id-logo" src={LogoID} alt="Logo Integração Digital" />
          </div>

          <div className="card-right">
            <h1>Integração Digital</h1>
            <h3>Desenvolvedor Front-end</h3>
            <p>
              Fev de 2024 - <strong>Atualmente</strong>
            </p>
          </div>
        </ExpoCard>
      </ExpCardContent>
    </ExpContainer>
  );
};

export default Exp;
