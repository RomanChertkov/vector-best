import React, { useEffect } from 'react'
import { Button, Grid, Stack, Typography, Card } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export default function PokemonPage(props) {
  const navigate = useNavigate()
  const { id: pokemonId } = useParams()
  useEffect(() => {
    console.log('Hopme render')
  }, [])
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" component="h2">
          PokemonPage {pokemonId}
        </Typography>

        <Button onClick={() => navigate('/')} variant="outlined">
          Назад на главную
        </Button>

        <Stack spacing={2}>
          <Card></Card>
        </Stack>
      </Stack>
    </>
  )
}
