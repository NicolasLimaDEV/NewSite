import styled from "styled-components";

export const ExpContainer = styled.section`
  margin-bottom: 70px;

  h1 {
    font-size: 30px;
  }
`;

export const ExpCardContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ExpoCard = styled.div`
  margin-right: 10px;
  background-color: var(--menuMobile);

  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid var(--borderColor);

  @media screen and (max-width: 769px) {
    margin: 6px 0;
    width: 100%;
  }

  img {
    width: 63px;
    margin-right: 10px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    color: var(--textCinza);
  }

  p {
    margin-top: 5px;
    color: var(--textCinza);
    font-size: 14px;
    font-weight: bold;

    strong {
      color: var(--verde);
    }

    @media screen and (max-width: 769px) {
      font-size: 15px;
    }
  }
`;
