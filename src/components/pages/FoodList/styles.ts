import styled from 'styled-components'
import { cores } from '../../../styles'

export const PageContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const FoodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 120px;
`
export const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.vermelho};
  width: 100%;
  max-width: 320px;
  height: 338px;
  padding: 8px;

  h3 {
    width: 124px;
    height: 19px;
    color: ${cores.chantili};
    font-size: 16px;
    font-weight: 900;
    line-height: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    width: 304px;
    height: 88px;
    color: ${cores.chantili};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 8px;
  }
`
export const FoodImage = styled.img`
  max-width: 304px;
  height: 167px;
`
export const AddButton = styled.button`
  width: 100%;
  height: 24px;
  max-width: 304px;
  background-color: ${cores.chantili};
  color: ${cores.vermelho};
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  padding: 4px;
`
