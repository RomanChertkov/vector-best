import { Card, CardContent, Grid, Skeleton, Stack } from '@mui/material'

export default function PokemonItemSkeleton(props) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Stack spacing={2}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <Skeleton variant="circular" width={50} height={50} />
            </Grid>
            <Grid item xs={9}>
              <Skeleton
                variant="text"
                width={'100%'}
                sx={{ fontSize: '1rem' }}
              />
            </Grid>
          </Grid>
          <Stack spacing={1}>
            <Skeleton variant="text" width={'100%'} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" width={'100%'} sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" width={'100%'} sx={{ fontSize: '1rem' }} />
          </Stack>
          <Skeleton variant="rounded" width={'100%'} height={40} />
        </Stack>
      </CardContent>
    </Card>
  )
}
