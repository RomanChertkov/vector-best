import * as paginationTypes from './paginationTypes'

const initialState = {
  itemsPerPage: 10,
  currentPage: 1,
  totalApiItems: 0,
}

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case paginationTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case paginationTypes.SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.payload }
    case paginationTypes.SET_TOTAL_API_ITEMS:
      return { ...state, totalApiItems: action.payload }
    default:
      return state
  }
}
