import styled from 'styled-components'
import { cores } from '../../../styles'

export const PageContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`

export const FoodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  justify-items: center;
  width: 100%;
`

export const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  background-color: ${cores.vermelho};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 320px;
  height: 338px;
  text-align: start;

  h3 {
    margin: 16px 0 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${cores.chantili};
    text-align: start;
  }

  p {
    font-size: 14px;
    color: ${cores.chantili};
    margin-bottom: 16px;
  }
`

export const FoodImage = styled.img`
  width: 100%;
  max-width: 304px;
  height: 167px;
`

export const AddButton = styled.button`
  width: calc(100% - 16px); /* Subtrai 8px de margem para cada lado */
  margin: 0 8px;
  height: 24px;
  width: 304px;
  background-color: ${cores.chantili};
  color: ${cores.vermelho};
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e55337;
    opacity: 95%;
  }
`
