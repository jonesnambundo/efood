import React from 'react'
import { HeaderContainer, CartStatus } from './styles'
import logoImg from '../../../assets/images/efoodlogo.png'
import { Link } from 'react-router-dom'

const HeaderPerfil: React.FC = () => (
  <HeaderContainer>
    <div className="container">
      <span>Restaurantes</span>
      <Link to="/">
        <img src={logoImg} alt="efoodlogo" />
      </Link>
      <CartStatus>0 produto(s) no carrinho</CartStatus>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil
