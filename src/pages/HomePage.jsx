import { useDispatch, useSelector } from 'react-redux'
import { Typography, Stack } from '@mui/material'
import AppPagination from '../components/AppPagination'
import PokemonsList from '../components/PokemonsList'
import SkeletonList from '../components/SkeletonList'
import {
  setCurrentPage,
  setItemsPerPage,
} from '../store/pagination/paginationActionCreators'

export default function HomePage(props) {
  const isLoading = true

  const dispatch = useDispatch()
  const { itemsPerPage, currentPage } = useSelector((state) => state.pagination)
  const { pokemons, isDataFetching } = useSelector((state) => state.pokemons)

  function changePage(page) {
    dispatch(setCurrentPage(page))
  }

  function changeItemPerPage(obj) {
    dispatch(setItemsPerPage(obj.props.value))
  }

  return (
    <Stack spacing={4}>
      <Typography variant="h3" component="h2">
        HomePage
      </Typography>

      {isDataFetching && <SkeletonList itemsPerPage={itemsPerPage} />}
      {!isDataFetching && <PokemonsList />}

      <AppPagination
        changePage={changePage}
        changeItemPerPage={changeItemPerPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
    </Stack>
  )
}
