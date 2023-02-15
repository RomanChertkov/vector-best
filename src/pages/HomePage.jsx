import {
  Box,
  Grid,
  Typography,
  Pagination,
  Stack,
  Select,
  MenuItem,
} from '@mui/material'
import PokemonItem from '../components/PokemonItem'
import PokemonItemSkeleton from '../components/PokemonItemSkeleton'

export default function HomePage(props) {
  const count = 10

  const isLoading = !true
  return (
    <Stack spacing={4}>
      <Typography variant="h3" component="h2">
        HomePage
      </Typography>

      <Grid container spacing={3}>
        {isLoading &&
          Array.from(Array(count)).map((_, index) => (
            <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
              <PokemonItemSkeleton />
            </Grid>
          ))}

        {!isLoading &&
          Array.from(Array(count)).map((_, index) => (
            <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
              <PokemonItem />
            </Grid>
          ))}
      </Grid>

      <Stack direction="row" justifyContent={'space-between'}>
        <Pagination
          count={10}
          size="large"
          color="primary"
          disabled={isLoading}
        />

        <Stack direction="row" spacing={3} alignItems="center">
          <Typography variant="body1" component="div">
            Количество элементов:
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            // label="Age"
            inputProps={{ 'aria-label': 'Without label' }}
            size="small"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </Stack>
      </Stack>
    </Stack>
  )
}
