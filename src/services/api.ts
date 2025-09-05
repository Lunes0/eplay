import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGame: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getRpgGame: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getFightGame: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getSimulationGame: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getSportsGame: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery,
  useGetGameQuery
} = api
export default api
