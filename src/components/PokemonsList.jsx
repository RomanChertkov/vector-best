import React from 'react'
import { Grid } from '@mui/material'
import PokemonItem from './PokemonItem'

function PokemonsList({ pokemons }) {
  return (
    <Grid container spacing={3}>
      {pokemons?.map((item, index) => (
        <Grid item key={item.id} xs={12} sm={12} md={6} lg={4} xl={3}>
          <PokemonItem
            name={item.name}
            avatar={item['sprites']['other']['home']['front_default']}
            id={item.id}
          />
        </Grid>
      ))}
    </Grid>
  )
}
export default React.memo(PokemonsList)
