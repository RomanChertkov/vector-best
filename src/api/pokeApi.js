import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {},
})

export const pokeApi = {
  async getPokemonsByPage(limit, offset) {
    try {
      const response = await instance.get('/pokemon', {
        params: {
          limit,
          offset,
        },
      })
      const totalItemsCount = response.data.count

      const requests = response.data.results.map((item) => axios.get(item.url))
      const response2 = await Promise.all(requests)

      const clearData = response2.map((item) => item.data)
      return { clearData, totalItemsCount }
    } catch (err) {
      return { error: 1, message: err.message }
    }
  },

  async getPokemonByNameOrId(nameOrId) {
    try {
      const result = await instance.get(`pokemon/${nameOrId}`)
      return result.data
    } catch (err) {
      return { error: 1, message: err.message }
    }
  },
}
