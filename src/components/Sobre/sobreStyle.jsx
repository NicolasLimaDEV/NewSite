import styled from 'styled-components'

export const Sobre = styled.div`
  margin-bottom: 70px;

  h1{
    font-size: 25px;
    margin-bottom: 10px;
  }

  p{
    color: var(--textCinza);
    width: 650px;
    font-size: 15.5px;

    @media screen and (max-width: 769px){
      width: 100%;
    }
  }
`