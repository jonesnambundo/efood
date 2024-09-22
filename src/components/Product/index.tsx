import React from 'react'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Imagem } from './styles'

type Props = {
  title: string
  category: string
  destaque: string
  description: string
  infos: string
  image: string
}

const Product = ({
  title,
  category,
  destaque,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <div className="container">
      <Imagem src={image} alt="Hioki Sushi" />
      <div>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </div>
      <Titulo>{title}</Titulo>
      <Tag size="small">{destaque}</Tag>
      <Tag size="small">{category}</Tag>
      <Descricao>{description}</Descricao>
    </div>
  </Card>
)

export default Product
