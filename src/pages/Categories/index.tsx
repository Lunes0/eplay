import ProductsList from '../../components/ProductsList'

import {
  useGetActionGameQuery,
  useGetRpgGameQuery,
  useGetFightGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGameQuery()
  const { data: gamesRpg } = useGetRpgGameQuery()
  const { data: gamesLuta } = useGetFightGameQuery()
  const { data: gamesSimulacao } = useGetSimulationGameQuery()
  const { data: gamesEsportes } = useGetSportsGameQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRpg && gamesSimulacao) {
    return (
      <>
        <ProductsList
          games={gamesRpg}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="black"
          id="sports"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
