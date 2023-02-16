import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Stack } from '@mui/material'
import {
  setCurrentPage,
  setItemsPerPage,
} from '../store/pagination/paginationActionCreators'
import { getPokemonData } from '../store/pokemons/pokemonsActionCreators'
import AppPagination from '../components/common/AppPagination'
import PokemonsList from '../components/Home/PokemonsList'
import SkeletonList from '../components/Home/SkeletonList'

export default function HomePage() {
  const dispatch = useDispatch()
  const { itemsPerPage, currentPage, totalApiItems } = useSelector(
    (state) => state.pagination
  )
  const { pokemons, isDataFetching } = useSelector((state) => state.pokemons)

  useEffect(() => {
    dispatch(getPokemonData(currentPage, itemsPerPage))
  }, [])

  useEffect(() => {
    dispatch(getPokemonData(currentPage, itemsPerPage))
  }, [currentPage, itemsPerPage])

  function changePage(page) {
    dispatch(setCurrentPage(page))
  }

  function changeItemPerPage(obj) {
    dispatch(setItemsPerPage(obj.props.value))
  }

  const pagesCount =
    totalApiItems % itemsPerPage == 0
      ? totalApiItems / itemsPerPage
      : Math.ceil(totalApiItems / itemsPerPage) - 1

  return (
    <Stack spacing={4}>
      <Typography variant="h3" component="h2">
        HomePage
      </Typography>

      {isDataFetching ? (
        <SkeletonList itemsPerPage={itemsPerPage} />
      ) : (
        <PokemonsList pokemons={pokemons} />
      )}

      <AppPagination
        changePage={changePage}
        changeItemPerPage={changeItemPerPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalApiItems={pagesCount}
      />
    </Stack>
  )
}
