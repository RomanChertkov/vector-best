import { Typography, Stack } from '@mui/material'
import AppPagination from '../components/AppPagination'
import PokemonsList from '../components/PokemonsList'
import SkeletonList from '../components/SkeletonList'

export default function HomePage(props) {
  const count = 10

  const isLoading = !true
  return (
    <Stack spacing={4}>
      <Typography variant="h3" component="h2">
        HomePage
      </Typography>

      {isLoading && <SkeletonList itemsPerPage={count} />}
      {!isLoading && <PokemonsList />}

      <AppPagination />
    </Stack>
  )
}
