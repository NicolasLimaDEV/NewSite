import styled from "styled-components";

export const CardContent = styled.article`
  padding: 15px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 769px) {
    width: 100%;

    .title-infos {
      h3 {
        font-size: 15px;
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--borderColor);
    padding-bottom: 20px;

    img {
      width: 100px;
      border-radius: 50%;
      margin-right: 10px;

      @media screen and (max-width: 769px) {
        margin-right: 10px;
      }
    }

    .title-infos {
      color: var(--textBranco);

      h1 {
        font-size: 20px;
      }

      h3 {
        font-weight: 200;
        font-size: 20px;

        @media screen and (max-width: 1024px) {
          font-size: 18px;
          margin-right: 40px;
        }

        @media screen and (max-width: 769px) {
          font-size: 15px;
          margin-right: 60px;
        }
      }

      .infos {
        margin-top: 12px;

        font-size: 14px;
        color: var(--textCinza);
        font-weight: bold;

        @media screen and (max-width: 1024px) {
          font-size: 12px;
        }
      }
    }
  }
`;

export const Contratacao = styled.article`
  display: flex;
  align-items: center;
  margin-top: 7px;

  @media screen and (max-width: 769px) {
    p {
      font-size: 14px;
    }
  }

  div {
    width: 10px;
    height: 10px;
    background-color: var(--verde);
    border-radius: 999px;
    margin-right: 5px;

    animation: pulse 1.3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 var(--verde);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

//Faculdade
export const SocialInfo = styled.div`
  margin-top: 15px;
  color: var(--textBranco);

  h4 {
    color: var(--textCinza);
    font-weight: 400;
    font-style: italic;

    span {
      color: var(--verde);
      font-weight: bold;
      font-size: 13px;
    }
  }
`;

export const LinksItens = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 150px;

  button {
    margin: 5px 0;
    padding: 8px 20px;
    border-radius: 5px;
    background-color: var(--menuMobile);
    border: 1px solid var(--borderColor);
    transition: 0.3s all;

    &:hover {
      background-color: var(--borderColor);
      cursor: pointer;
    }

    span {
      padding-right: 10px;
      font-size: 15px;
      display: flex;
      align-items: center;
    }

    a {
      font-size: 15px;
      color: var(--textBranco);
      text-decoration: none;
      display: flex;
      align-items: center;
      font-weight: bold;
    }
  }
`;
