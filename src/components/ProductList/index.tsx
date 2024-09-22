import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  background: 'white' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container>
    <div className="container" style={{ background }}>
      <h2>{title}</h2>
      <List>
        <Product
          category="destaque da semana"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos="Japonesa"
          image="//placehold.it/472x215"
        />
        <Product
          category="destaque da semana"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          infos="Japonesa"
          image="//placehold.it/472x215"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
