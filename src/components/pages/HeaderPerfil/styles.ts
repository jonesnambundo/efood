import styled from 'styled-components'
import bannerImg from '../../../assets/images/fundo.png'
import { cores } from '../../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
  padding: 20px 0;
  font-size: 18px;

  img {
    margin: 0 56px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1024px; /* Alinhado ao máximo do GlobalCss */
    height: 180px;
    text-align: center;
    padding: 40px 0;
  }

  span {
    color: ${cores.vermelho};
    font-size: 18px;
    font-weight: bold;
  }
`
export const CartStatus = styled.span`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;
`
