import styled from "styled-components";

export const AllPortMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;

    .back-page{
        margin-top: 35px;
        margin-bottom: 50px;

        .btn-back-page{
            background-color: var(--textBranco);
            color: var(--bgPage);
            padding: 12px 30px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.2s;

            &:hover{
                color: var(--bgPage);
                background-color: var(--verde);
            }
        }
    }

    h1{
        font-size: 35px;
        color: #fff;
    }

    p{
        margin-top: 12px;
        color: var(--textCinza);
        width: 400px;
        text-align: center;
        font-size: 16px;
    }

    @media screen and (max-width: 990px){
      p{
        width: 100%;
        padding: 0 25px;
      }
    }
`

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;

export const PortCard = styled.a`
  width: 250px;
  background-color: var(--menuMobile);
  margin-top: 20px;
  margin-bottom: 30px;
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
    height: 120px;
    object-fit: cover;
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
    text-align: start;
  }

  @media screen and (max-width: 990px){
    width: 300px;
    height: 230px;
    margin: 10px;
  }
`;