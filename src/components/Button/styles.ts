import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  width: 82px;
  height: 24px;
  padding: 6px 4x;
  font-size: 12px;
  background-color: ${cores.vermelho};
  color: ${cores.floral};
`

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  padding: 6px 4x;
  font-size: 12px;
  background-color: ${cores.vermelho};
  color: ${cores.floral};
`
