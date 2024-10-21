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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const LogoFood = styled.img`
  width: 150px;
  height: auto;
`

export const SocialMedia = styled.div`
  width: 88px;
  height: 24px;
  margin-top: 32px;
  display: flex;
  justify-content: space-around;

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
  width: 480px;
  height: 24px;
  color: ${cores.vermelho};
  margin-top: 80px;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`
