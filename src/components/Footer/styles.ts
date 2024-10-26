import styled from 'styled-components'
import { cores } from '../../styles'

export const Background = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${cores.chantili};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const LogoFood = styled.img`
  width: 125px;
  height: auto;
  margin-top: 40px;
  margin-bottom: 32px;
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Alinha verticalmente */
  gap: 16px; /* Adiciona espaço consistente entre os ícones */
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`
export const Description = styled.p`
  margin: auto;
  max-width: 490px;
  width: 100%;
  height: 24px;
  color: ${cores.vermelho};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`
