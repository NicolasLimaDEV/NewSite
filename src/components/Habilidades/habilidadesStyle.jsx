import styled from 'styled-components'

export const Stacks = styled.div`
  margin-bottom: 70px;

  h1{
    font-size: 30px;
    margin-bottom: 8px;
  }
`

export const SkillsIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 650px;

  .icon_item{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid var(--borderColor);
    padding: 8px 12px;
    margin-top: 10px;
    margin-right: 15px;
    border-radius: 10px;
    background-color: var(--menuMobile);

    img{
      width: 17px;
    }

    p{
      margin-left: 8px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 990px){
    width: 100%;
  }
`