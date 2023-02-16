import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
export default function ListItemBasic({ icon, title, subtitle, color }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={color}>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItem>
  )
}
