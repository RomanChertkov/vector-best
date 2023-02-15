import { Box, Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function PokemonPage(props) {
  const navigate = useNavigate()
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            PokemonPage
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate('/')} variant="outlined">
            Назад
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
