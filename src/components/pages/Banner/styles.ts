import styled from 'styled-components'
import bannerImg from '../../../assets/images/backgroungPerfil.png'
import { cores } from '../../../styles'

export const BannerContainer = styled.div`
  height: 280px;
  background: url(${bannerImg}) center/cover no-repeat;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  object-fit: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  span {
    top: 24px;
    color: ${cores.chantili};
    font-size: 32px;
    font-weight: 100;
    line-height: 40px;
    position: relative;
  }

  h2 {
    margin-top: 160px;
    color: ${cores.chantili};
    font-size: 32px;
    font-weight: 900;
    line-height: 40px;
    position: relative;
  }
`
