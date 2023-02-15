import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import logo from '../assets/logo_pokeapi.png'
import { Link } from 'react-router-dom'

export default function AppHeader(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              <img style={imgStyle} src={logo} alt="logo" />
            </Link>
          </IconButton>
          <Typography variant="h5" color="inherit" component="div">
            Тестовое задание
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const imgStyle = {
  height: 50,
}
