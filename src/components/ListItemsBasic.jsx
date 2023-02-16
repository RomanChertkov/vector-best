import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
export default function ListItemBasic({ icon, title, subtitle }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItem>
  )
}
