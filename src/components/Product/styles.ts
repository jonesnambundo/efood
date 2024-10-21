import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.vermelho}; /* Borda vermelha */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  position: relative;
`

export const Imagem = styled.img`
  width: 100%;
  max-width: 472px;
  max-height: 217px;
`

export const TitleRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Alinha o título e a classificação nas extremidades */
  margin-top: 8px;
  margin-left: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.vermelho};
  margin: 0; /* Remove margens extras */
  margin-bottom: 16px;
`

export const Rating = styled.div`
  font-size: 18px;
  color: ${cores.vermelho};
  font-weight: bold;
  display: flex;
  align-items: center; /* Alinha o número e a estrela verticalmente */

  img {
    margin-left: 8px; /* Espaçamento entre o número e a estrela */
    width: 21px;
    height: 20px;
    margin-right: 8px;
    margin-bottom: 1px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.vermelho};
  line-height: 22px;
  margin-left: 8px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const SaibaMais = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
  a {
    background-color: ${cores.vermelho};
    color: ${cores.branca};
    padding: 4px 6px;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
  }
`
