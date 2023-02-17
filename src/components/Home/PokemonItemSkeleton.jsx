import { Card, CardContent, Skeleton, Stack } from '@mui/material'

export default function PokemonItemSkeleton() {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Stack spacing={2}>
          <Skeleton variant="rectangular" width={'100%'} sx={{ height: 200 }} />
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
