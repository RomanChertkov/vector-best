import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Chip,
} from '@mui/material'
import logo from '../../assets/img/logo_pokeapi.png'
import { useDispatch } from 'react-redux'
import { setIsOpenSearchModal } from '../../store/search/searchActionCreators'

export default function AppHeader() {
  const dispatch = useDispatch()

  function openSearchModal() {
    dispatch(setIsOpenSearchModal(true))
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
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

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Тестовое задание
          </Typography>

          <Chip
            onClick={openSearchModal}
            sx={{ background: 'white' }}
            label="Pokemon search ..."
            variant="outlined"
            color="primary"
            clickable={false}
            size="medium"
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const imgStyle = {
  height: 50,
}
