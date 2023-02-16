import { deepOrange, deepPurple } from '@mui/material/colors'
import {
  Grid,
  Stack,
  Card,
  CardContent,
  CardHeader,
  List,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
export default function PokemonInfoBasic({
  img,
  height,
  weight,
  order,
  baseExperience,
  name,
  isDefault,
}) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Stack alignItems="center" justifyContent={'center'}>
            <img src={img} alt={name} />
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Card sx={{ width: '100%' }}>
          <CardHeader title="Basic parametres"></CardHeader>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>H</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Height" secondary={height} />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: deepPurple[200] }}>W</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Weight" secondary={weight} />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>O</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Order" secondary={order} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: deepOrange[200] }}>D</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Default"
                  secondary={isDefault ? 'Yes' : 'No'}
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: deepPurple[700] }}>B</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="base experience"
                  secondary={baseExperience}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
