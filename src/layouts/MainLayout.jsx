import { Outlet } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import AppHeader from '../components/common/AppHeader'
import { useDispatch, useSelector } from 'react-redux'
import ModalDialog from '../components/common/ModalDialog'
import {
  getOnePokemonData,
  setIsOpenSearchModal,
} from '../store/search/searchActionCreators'

export default function MainLayout() {
  const dispatch = useDispatch()
  const { isOpenSearchModal, onePokemon, isSearching, searchingError } =
    useSelector((state) => state.search)

  function handleClose() {
    dispatch(setIsOpenSearchModal(false))
  }

  function getSearchResult(pokemonName) {
    dispatch(getOnePokemonData(pokemonName))
  }

  return (
    <>
      <AppHeader />
      <Container>
        <Box sx={{ padding: 3 }}>
          <Outlet />
        </Box>
      </Container>
      <ModalDialog
        isOpen={isOpenSearchModal}
        getSearchResult={getSearchResult}
        handleClose={handleClose}
        searchResult={onePokemon}
        isSearching={isSearching}
        searchError={searchingError}
      />
    </>
  )
}
