import * as pokemonsTypes from './pokemonTypes'

const initialState = {
  pokemons: [],
  isDataFetching: true,
}

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case pokemonsTypes.SET_IS_DATA_FETCHING:
      return { ...state, isDataFetching: action.payload }
    case pokemonsTypes.SET_POKEMONS_DATA:
      return { ...state, pokemons: action.payload }
    default:
      return state
  }
  s
}
