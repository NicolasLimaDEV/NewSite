import styled from "styled-components";

export const Sobre = styled.div`
  margin-bottom: 70px;

  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    opacity: 0.8;
    width: 650px;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;

    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
`;
