import React from 'react'
import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Imagem,
  Infos,
  Rating,
  SaibaMais,
  TitleRatingWrapper
} from './styles'
import starImg from '../../assets/images/Star.png'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  link: string
  rating: number
}

const Product = ({ title, description, infos, image, rating }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TitleRatingWrapper>
      <Titulo>{title}</Titulo>
      <Rating>
        {rating}
        <img src={starImg} alt="Estrela" /> {/* Displaying star image */}
      </Rating>
    </TitleRatingWrapper>
    <Descricao>{description}</Descricao>
    <SaibaMais>
      <Link type="link" to="/restaurantes">
        Saiba mais
      </Link>
    </SaibaMais>
  </Card>
)

export default Product
