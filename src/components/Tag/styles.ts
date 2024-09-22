import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.chantili};
  font-size: ${(props) => (props.size === 'big' ? '12px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '6px 4px' : '4px 6px')};
  display: inline-block;
`
