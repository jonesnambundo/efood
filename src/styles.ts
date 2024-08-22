import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  chantili: '#FFEBD9',
  vermelho: '#E66767',
  floral: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif
  }

  body {
    background-color: ${cores.floral};
    color: ${cores.vermelho};
  }
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
