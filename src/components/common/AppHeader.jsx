import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'
import logo from '../../assets/img/logo_pokeapi.png'

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
