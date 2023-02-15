import * as paginationTypes from './paginationTypes'

const initialState = {
  itemsPerPage: 20,
  currentPage: 1,
  totalApiItems: undefined,
}

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case paginationTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case paginationTypes.SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.payload }
    default:
      return state
  }
}
