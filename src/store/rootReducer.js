import { combineReducers } from 'redux'
import { pokemonsReducer } from './pokemons/pokemonsReducer'
import { paginationReducer } from './pagination/paginationReducer'
import { searchReducer } from './search/searchReducer'

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pagination: paginationReducer,
  search: searchReducer,
})
