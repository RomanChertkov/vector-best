import * as searchTypes from './searchTypes'

const initialState = {
  onePokemon: {},
  isOpenSearchModal: false,
  isSearching: false,
  searchingError: '',
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.SET_IS_SEARCH_MODAL_OPEN:
      return { ...state, isOpenSearchModal: action.payload }
    case searchTypes.SET_ONE_POKEMON_DATA:
      return { ...state, onePokemon: action.payload }
    case searchTypes.SET_IS_SEARCHING:
      return { ...state, isSearching: action.payload }
    case searchTypes.SET_SEARCHING_ERROR:
      return { ...state, searchingError: action.payload }
    default:
      return state
  }
}
