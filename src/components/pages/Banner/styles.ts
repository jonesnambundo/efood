import styled from 'styled-components'
import bannerImg from '../../../assets/images/backgroungPerfil.png'

export const BannerContainer = styled.div`
  height: 300px;
  background: url(${bannerImg}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
`
