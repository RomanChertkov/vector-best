import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Stack, Typography } from '@mui/material'
import PokemonInfoBasic from '../components/PokemonItemPage/PokemonInfoBasic'
import PokemonInfoAdditional from '../components/PokemonItemPage/PokemonInfoAdditional'
import {
  getOnePokemonData,
  setIsOpenSearchModal,
} from '../store/search/searchActionCreators'

export default function PokemonPage() {
  const navigate = useNavigate()
  const { id: pokemonId } = useParams()
  const dispatch = useDispatch()
  const { pokemons } = useSelector((state) => state.pokemons)
  const { onePokemon } = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(setIsOpenSearchModal(false))
  }, [])
  useEffect(() => {
    dispatch(setIsOpenSearchModal(false))
  }, [pokemonId])

  let currentPokemon
  if (pokemons.length != 0 && onePokemon.id == pokemonId) {
    currentPokemon = onePokemon
  } else if (!pokemons.length) {
    currentPokemon = onePokemon
  } else {
    currentPokemon = pokemons.filter((item) => item.id == pokemonId)[0]
  }

  const {
    name,
    sprites,
    height,
    weight,
    order,
    is_default: isDefault,
    base_experience: baseExperience,
    game_indices: gameIndices,
    moves,
    abilities,
    forms,
    stats,
    types,
  } = currentPokemon

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" component="h2">
          Pokemon {name}
        </Typography>

        <Button onClick={() => navigate('/')} variant="outlined">
          Назад
        </Button>
      </Stack>

      <Stack spacing={4} sx={{ marginTop: 4 }}>
        <PokemonInfoBasic
          img={sprites.other['official-artwork'].front_default}
          height={height}
          weight={weight}
          order={order}
          baseExperience={baseExperience}
          isDefault={isDefault}
          name={name}
        />

        <PokemonInfoAdditional
          gameIndices={gameIndices}
          moves={moves}
          abilities={abilities}
          forms={forms}
          stats={stats}
          types={types}
        />
      </Stack>
    </>
  )
}
