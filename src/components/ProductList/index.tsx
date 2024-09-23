import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
}

const ProductList = ({ title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          image="//placehold.it/472x215"
          title="Hioki Sushi"
          infos={['Destaque da Semana', 'Japonesa']}
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          rating={4.9}
          link="/product/hioki-sushi"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
