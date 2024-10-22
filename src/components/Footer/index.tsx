import logoImg from '../../assets/images/efoodlogo.png'
import instagramLogo from '../../assets/images/instagram.png'
import facebookLogo from '../../assets/images/facebook.png'
import twitterLogo from '../../assets/images/twitter.png'
import { Background, Description, SocialMedia, LogoFood } from './styles'

const Footer = () => (
  <Background>
    <div className="container">
      <LogoFood src={logoImg} alt="Logo da Efood" />
      <SocialMedia>
        <img src={instagramLogo} alt="Logo do Instagram" />
        <img src={facebookLogo} alt="Logo do Facebook" />
        <img src={twitterLogo} alt="Logo do Twitter" />
      </SocialMedia>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos. A
        responsabilidade pela entrega e qualidade dos produtos é toda do
        estabelecimento contratado.
      </Description>
    </div>
  </Background>
)

export default Footer
