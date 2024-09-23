import React from 'react'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Imagem, Infos, Rating } from './styles'
import { ButtonLink } from '../Button/styles'
import starImg from '../../assets/images/Star.png' // Importing star image correctly

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  link: string
  rating: number
}

const Product = ({
  title,
  description,
  infos,
  image,
  link, // Aqui, estamos recebendo a prop 'link'
  rating // Recebendo o rating
}: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Rating>
      {rating}
      <img src={starImg} alt="Estrela" /> {/* Displaying star image */}
    </Rating>
    <Descricao>{description}</Descricao>
    <ButtonLink type="link" to={link} title="Clique aqui">
      Saiba mais
    </ButtonLink>
  </Card>
)

export default Product
