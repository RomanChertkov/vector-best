import * as pokemonsTypes from './pokemonTypes'
import { pokeApi } from '../../api/pokeApi'
import { setTotalApItems } from '../pagination/paginationActionCreators'

export const setIsFetchingData = (flag) => ({
  type: pokemonsTypes.SET_IS_DATA_FETCHING,
  payload: flag,
})

export const setPokemonsData = (pokemonData) => ({
  type: pokemonsTypes.SET_POKEMONS_DATA,
  payload: pokemonData,
})

export const getPokemonData =
  (currentPage, itemsPerPage) => async (dispatch) => {
    try {
      const offset = currentPage * itemsPerPage
      dispatch(setIsFetchingData(true))
      const response = await pokeApi.getPokemonsByPage(itemsPerPage, offset)
      // debugger
      if (response.error == 1) console.log(response.message)
      else {
        // debugger
        dispatch(setTotalApItems(response.totalItemsCount))
        dispatch(setPokemonsData(response.clearData))
        dispatch(setIsFetchingData(false))
      }
    } catch (errors) {
      alert(errors)
    }
  }
