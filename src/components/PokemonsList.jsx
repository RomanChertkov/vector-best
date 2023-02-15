import { Grid } from '@mui/material'
import PokemonItem from './PokemonItem'

export default function PokemonsList(props) {
  return (
    <Grid container spacing={3}>
      {Array.from(Array(10)).map((_, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
          <PokemonItem />
        </Grid>
      ))}
    </Grid>
  )
}
