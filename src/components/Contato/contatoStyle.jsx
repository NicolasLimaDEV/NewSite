import styled from "styled-components";

export const ContatoContainer = styled.section`
  margin-top: 50px;

  h1{
    font-size: 25px;
  }

  h3{
    font-weight: 400;
    font-size: 17px;
    opacity: 0.6;
    margin-top: 5px;
  }

  p{
    margin-top: 20px;
    margin-bottom: 10px;
  }

  button{
    background-color: transparent;
    border-radius: 6px;
    margin-top: 10px;
    transition: .3s all;
    border: none;
    outline: none;

    &:hover{
      cursor: pointer;
      margin-left: 10px;
    }

    a{
      font-size: 16px;
      font-weight: bold;
      color: var(--linkedinColor);
      text-decoration: none;
    }
  }
`