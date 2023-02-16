import { Grid, Stack, Card, CardContent, CardHeader, List } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import ListItemBasic from './ListItemsBasic'

export default function PokemonInfoBasic({
  img,
  height,
  weight,
  order,
  baseExperience,
  name,
  isDefault,
}) {
  const basicPokemonInfo = [
    {
      icon: 'H',
      color: { bgcolor: deepOrange[500] },
      title: 'Height',
      subtitle: height,
    },
    {
      icon: 'W',
      color: { bgcolor: deepPurple[200] },
      title: 'Weight',
      subtitle: weight,
    },
    {
      icon: 'O',
      color: { bgcolor: deepPurple[500] },
      title: 'Order',
      subtitle: order,
    },
    {
      icon: 'D',
      color: { bgcolor: deepOrange[200] },
      title: 'Default',
      subtitle: isDefault ? 'Yes' : 'No',
    },
    {
      icon: 'B',
      color: { bgcolor: deepPurple[700] },
      title: 'base experience',
      subtitle: baseExperience,
    },
  ]

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
              {basicPokemonInfo?.map((item, index) => (
                <ListItemBasic
                  key={index}
                  icon={item.icon}
                  color={item.color}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
