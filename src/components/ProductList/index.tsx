import Food from '../../models/Food'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  foods: Food[]
}

const ProductList = ({ title, foods }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            image={food.image}
            title={food.title}
            infos={food.infos}
            description={food.description}
            rating={food.rating}
            link={food.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
