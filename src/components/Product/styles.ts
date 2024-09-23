import styled from 'styled-components'
import { cores } from '../../styles'
import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border-radius: 1px;
  position: relative;
`
export const Imagem = styled.img`
  max-width: 472px;
  max-height: 217px;
  margin-top: 80px;

  ${TagContainer} {
    margin-right: 38px;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${cores.vermelho};
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.vermelho};
  font-weight: 400;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Rating = styled.div`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: 700px;
`
