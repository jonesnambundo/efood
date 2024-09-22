import styled from 'styled-components'
import { cores } from '../../styles'
import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.floral};
`
export const Imagem = styled.img`
  max-width: 472px;
  max-height: 217px;
  margin-top: 80px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: ${cores.vermelho};
  padding: 8px 7px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.vermelho};
  font-weight: 400;
  display: block;
  margin-top: 16px;
`
