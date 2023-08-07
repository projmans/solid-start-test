import { PokemonData } from "../types"

export const fetchAllPokemons = async (
  offset = "0",
  limit = "150"
): Promise<PokemonData[]> => {
  const pokemons = await (
    await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    )
  ).json()
  return pokemons.results
}

export const fetchPokemonData = (pokemonName: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => {
    return res.json()
  })
