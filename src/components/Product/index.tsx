import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title
}: Props) => (
  <Card>
    <img src={image} alt="{title}" />
    <Titulo>{title}</Titulo>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
