import { useNavigate } from 'react-router-dom'

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Stack,
} from '@mui/material'

export default function PokemonItem({ name, avatar, id }) {
  const navigate = useNavigate()
  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia sx={{ height: 250 }} image={avatar} title={name} />
      <CardContent>
        <Stack spacing={2}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Button
            onClick={() => navigate(`/pokemon/${id}`)}
            variant="contained"
            size="large"
          >
            Learn More
          </Button>
        </Stack>
        {/* <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <Button variant="contained">Подробнее</Button>
        </Stack> */}
      </CardContent>
      {/* <CardActions>
        <Button variant="contained" size="large">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  )
}
