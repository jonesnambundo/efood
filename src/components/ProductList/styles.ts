import styled from 'styled-components'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section`
  background-color: ${cores.floral};
  padding: 80px 0px;

  ${Card} {
    border-radius: 1px solid ${cores.vermelho};
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
