import React from 'react'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Imagem } from './styles'

type Props = {
  title: string
  category: string
  destaque: string
  description: string
  infos: string // Agora `infos` é apenas uma string
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
      <Imagem src={image} alt={title} />
      <div>
        <Tag>{infos}</Tag> {/* Renderização simples de `infos` como string */}
      </div>
      <Titulo>{title}</Titulo>
      <Tag>{destaque}</Tag>
      <Tag>{category}</Tag>
      <Descricao>{description}</Descricao>
    </div>
  </Card>
)

export default Product
