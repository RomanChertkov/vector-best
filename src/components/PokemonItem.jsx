import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import { Stack } from '@mui/system'
export default function PokemonItem(props) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Pokemon name"
      />
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <Button variant="contained">Подробнее</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
