import React from 'react'
import {
  FoodContainer,
  FoodCard,
  FoodImage,
  AddButton,
  PageContainer
} from './styles'
import pizzaimg from '../../../assets/images/Pizza.png'

const foods = Array(6).fill({
  name: 'Pizza Marguerita',
  description:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  image: pizzaimg
})

const FoodList = () => (
  <PageContainer className="container">
    <FoodContainer>
      {foods.map((food, index) => (
        <FoodCard key={index}>
          <FoodImage src={food.image} alt={food.name} />
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <AddButton>Adicionar ao carrinho</AddButton>
        </FoodCard>
      ))}
    </FoodContainer>
  </PageContainer>
)

export default FoodList
