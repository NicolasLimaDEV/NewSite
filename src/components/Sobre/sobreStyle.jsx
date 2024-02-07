import styled from "styled-components";

export const Sobre = styled.div`
  margin-bottom: 70px;

  h1 {
    font-size: 25px;
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    opacity: 0.7;
    width: 650px;
    font-size: 15.5px;
    font-weight: 300;

    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
`;
