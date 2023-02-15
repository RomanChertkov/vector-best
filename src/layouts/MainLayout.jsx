import { Container, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

export default function MainLayout() {
  return (
    <>
      <AppHeader />
      <Container>
        <Box sx={{ padding: 3 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}
