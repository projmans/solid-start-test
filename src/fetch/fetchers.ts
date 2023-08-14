import { PokemonData } from "../types"

export const fetchAllPokemons = async (
  limit = "10227"
): Promise<PokemonData[]> => {
  const pokemons = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  ).json()
  return pokemons.results
}

export const fetchPokemonData = (pokemonName: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res =>
    res.json()
  )
