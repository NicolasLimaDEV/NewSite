import { Container } from "./rightStyle";

import Portifolio from "../Portifolio";
import SobreMim from "../Sobre";
import Habilidades from "../Habilidades";
import Exp from "../Exp";
import Contato from "../Contato";

const Right = () => {
  return (
    <Container>
      <SobreMim />
      <Habilidades />
      <Portifolio />
      <Exp />
      <Contato />
    </Container>
  );
};

export default Right;
