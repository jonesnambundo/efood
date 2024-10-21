import Header from '../../Header'
import ProductList from '../../ProductList'

import imagem from '../../../assets/images/imagem.png'
import Food from '../../../models/Food'

const promocoes: Food[] = [
  {
    id: 1,
    category: '', // Now optional
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: imagem,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    rating: 4.8, // Changed to number
    link: 'saiba mais'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductList title={''} foods={promocoes} />
  </>
)

export default Home
