import { Outlet } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import AppHeader from '../components/common/AppHeader'

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
