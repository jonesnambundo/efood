import React from 'react'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Imagem } from './styles'
import imagemImg from '../../assets/images/imagem.png'

const Product = () => (
  <Card>
    <div className="container">
      <Imagem src={imagemImg} alt="Hioki Sushi" />
      <Titulo>Hioki Sushi</Titulo>
      <Tag size="small">Destaque da semana</Tag>
      <Tag size="small">Japonesa</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quisquam
        aut vel aperiam tenetur laborum error, harum delectus adipisci placeat!
        Esse commodi asperiores maxime quod explicabo nemo sunt non eius.
      </Descricao>
      <Tag>Saiba mais</Tag>
    </div>
  </Card>
)

export default Product
