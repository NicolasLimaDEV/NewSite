import styled from "styled-components";

export const SectionPort = styled.section`
  margin-bottom: 70px;

  h1 {
    font-size: 30px;
    margin-bottom: 5px;
  }

  p {
    color: var(--textCinza);
    margin-bottom: 35px;
  }

  .projetoFic {
    margin-top: 50px;
  }

  .message{
    color: var(--verde);
    font-weight: bold;
    font-style: italic;
  }

  .link-git{
    margin-top: 23px;

    h4{
      margin-bottom: 8px;
    }

    a{
      color: var(--verde);
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      transition: .3s all;

      &:hover{
        margin-left: 10px;
      }
    }
  }
  
`;

export const SectionCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.a`
  width: 260px;
  background-color: var(--menuMobile);
  margin-top: 20px;
  margin-right: 10px;
  padding: 8px;
  border-radius: 15px;
  transition: 0.5s all;
  text-decoration: none;
  border: 1px solid var(--borderColor);

  &:hover {
    transition: 0.5s all;
    background-color: var(--borderColor);
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  h3 {
    color: var(--textBranco);
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    font-style: italic;
  }
`;
