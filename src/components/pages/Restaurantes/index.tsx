import Header from '../../Header'
import ProductList from '../../ProductList'

import imagem from '../../../assets/images/imagem.png'
import Pizza from '../../../assets/images/Pizza.png'

import Food from '../../../models/Food'
import Footer from '../../Footer'
import FoodList from '../FoodList'
import HeaderPerfil from '../HeaderPerfil'
import Banner from '../Banner'

const promocoes: Food[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: Pizza,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    rating: 4.9,
    link: 'saiba mais'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Pizza,
    title: 'Hioki Sushi',
    infos: ['Italiana'],
    rating: 4.6,
    link: 'saiba mais'
  },
  {
    id: 3,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: Pizza,
    title: 'Hioki Sushi',
    infos: ['Italiana'],
    rating: 4.6, // Changed to number
    link: 'saiba mais'
  },
  {
    id: 4,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: Pizza,
    title: 'Hioki Sushi',
    infos: ['Italiana'],
    rating: 4.6,
    link: 'saiba mais'
  },
  {
    id: 5,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: Pizza,
    title: 'Hioki Sushi',
    infos: ['Italiana'],
    rating: 4.6,
    link: 'saiba mais'
  },
  {
    id: 6,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: Pizza,
    title: 'Hioki Sushi',
    infos: ['Italiana'],
    rating: 4.6,
    link: 'saiba mais'
  }
]

const Restaurantes = () => (
  <>
    <HeaderPerfil />
    <Banner />
    <FoodList />
    <Footer />
  </>
)

export default Restaurantes
