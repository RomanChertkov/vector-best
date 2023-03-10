import { Typography, Pagination, Stack, Select, MenuItem } from '@mui/material'

export default function AppPagination({
  itemsPerPage,
  currentPage,
  totalApiItems,
  changePage,
  changeItemPerPage,
}) {
  return (
    <Stack direction="row" justifyContent={'space-between'}>
      <Pagination
        count={totalApiItems}
        page={currentPage}
        size="large"
        color="primary"
        onChange={(_, page) => changePage(page)}
      />

      <Stack direction="row" spacing={3} alignItems="center">
        <Typography variant="body1" component="div">
          Количество элементов:
        </Typography>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={itemsPerPage}
          onChange={(_, obj) => changeItemPerPage(obj)}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </Stack>
    </Stack>
  )
}
