import { Imagem, Logo, Titulo } from './styles'

import fundoImg from '../../assets/images/fundo.png'
import logoImg from '../../assets/images/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${fundoImg})` }}>
    <Logo src={logoImg} alt="logo" />
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </Imagem>
)

export default Header
