import * as searchTypes from './searchTypes'
import { pokeApi } from '../../api/pokeApi'

export const setOnePokemonData = (onePokemonData) => ({
  type: searchTypes.SET_ONE_POKEMON_DATA,
  payload: onePokemonData,
})

export const setIsOpenSearchModal = (flag) => ({
  type: searchTypes.SET_IS_SEARCH_MODAL_OPEN,
  payload: flag,
})

export const setIsSearching = (flag) => ({
  type: searchTypes.SET_IS_SEARCHING,
  payload: flag,
})

export const setSearchingError = (errorMessage) => ({
  type: searchTypes.SET_SEARCHING_ERROR,
  payload: errorMessage,
})

export const getOnePokemonData = (nameOrId) => async (dispatch) => {
  try {
    dispatch(setSearchingError(''))
    dispatch(setIsSearching(true))
    const response = await pokeApi.getPokemonByNameOrId(nameOrId)
    if (response.error) {
      dispatch(setSearchingError(response.message))
    }
    dispatch(setOnePokemonData(response))
    dispatch(setIsSearching(false))
  } catch (error) {
    console.log({ error: 1, message: error.message })
  }
}
