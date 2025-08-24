import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import residentEvil from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'teste',
    description: 'teste',
    image: residentEvil,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Resident Evil'
  },
  {
    id: 2,
    category: 'teste',
    description: 'teste',
    image: diablo,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Diablo'
  },
  {
    id: 3,
    category: 'teste',
    description: 'teste',
    image: zelda,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Zelda'
  },
  {
    id: 7,
    category: 'teste',
    description: 'teste',
    image: starWars,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Star Wars'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'teste',
    description: 'teste',
    image: residentEvil,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Resident Evil'
  },
  {
    id: 6,
    category: 'teste',
    description: 'teste',
    image: diablo,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Diablo'
  },
  {
    id: 7,
    category: 'teste',
    description: 'teste',
    image: zelda,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Zelda'
  },
  {
    id: 8,
    category: 'teste',
    description: 'teste',
    image: starWars,
    infos: ['-10%', 'R$ 150'],
    system: 'Windows',
    title: 'Star Wars'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
