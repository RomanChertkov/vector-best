export default function ValuesList({ list, icon }) {
  return (
    <List>
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>X</Avatar>
        </ListItemAvatar> */}
        <ListItemText primary="Height" secondary={currentPokemon.height} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>V</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Weidth" secondary={currentPokemon.weight} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>O</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Order" secondary={currentPokemon.order} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>D</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Default"
          secondary={currentPokemon.is_default ? 'Yes' : 'No'}
        />
      </ListItem>
    </List>
  )
}
