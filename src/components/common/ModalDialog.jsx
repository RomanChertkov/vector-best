import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import PokemonItem from '../Home/PokemonItem'

export default function ModalDialog({
  isOpen,
  getSearchResult,
  handleClose,
  searchResult,
  isSearching,
  searchError,
}) {
  const searchInput = useInput('')
  const [validationError, setValidationError] = useState(null)

  function handleSearch(pokemonName) {
    setValidationError(null)
    const reg = /^[A-Za-z-]+$/

    if (!reg.exec(pokemonName)) {
      return setValidationError('Enter correct name without digit')
    }
    if (!validationError) {
      getSearchResult(pokemonName)
    }
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Pokemon Search</DialogTitle>
      <DialogContent sx={{ width: 300 }}>
        <DialogContentText>
          {validationError && <Alert severity="error">{validationError}</Alert>}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Pokemon name"
          type="text"
          fullWidth
          variant="outlined"
          {...searchInput}
        />
        {searchError && <Typography>{searchError}</Typography>}
        {searchResult.name && (
          <PokemonItem
            name={searchResult?.name}
            avatar={searchResult?.sprites.other.home['front_default']}
            id={searchResult?.id}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button
          disabled={isSearching}
          onClick={() => handleSearch(searchInput.value)}
        >
          Search
        </Button>
      </DialogActions>
    </Dialog>
  )
}
