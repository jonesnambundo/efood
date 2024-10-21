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
import { ButtonLink } from '../Button/styles'
import starImg from '../../assets/images/Star.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  link: string
  rating: number
}

const Product = ({ title, description, infos, image, link, rating }: Props) => (
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
      <ButtonLink type="link" to={link} title="Clique aqui">
        Saiba mais
      </ButtonLink>
    </SaibaMais>
  </Card>
)

export default Product
