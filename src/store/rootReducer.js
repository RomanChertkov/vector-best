import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemons/pokemonsReducer'
import { paginationReducer } from './pagination/paginationReducer'

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pagination: paginationReducer,
})
