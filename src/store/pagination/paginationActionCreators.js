import * as paginationTypes from './paginationTypes'

export const setCurrentPage = (newCurrentPage) => ({
  type: paginationTypes.SET_CURRENT_PAGE,
  payload: newCurrentPage,
})

export const setItemsPerPage = (newValue) => ({
  type: paginationTypes.SET_ITEMS_PER_PAGE,
  payload: newValue,
})

export const setTotalApItems = (totalApiItems) => ({
  type: paginationTypes.SET_TOTAL_API_ITEMS,
  payload: totalApiItems,
})
