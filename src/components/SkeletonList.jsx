import React from 'react'
import { Grid } from '@mui/material'
import PokemonItemSkeleton from './PokemonItemSkeleton'

function SkeletonList({ itemsPerPage }) {
  return (
    <Grid container spacing={3}>
      {Array.from(Array(itemsPerPage)).map((_, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
          <PokemonItemSkeleton />
        </Grid>
      ))}
    </Grid>
  )
}
export default React.memo(SkeletonList)
