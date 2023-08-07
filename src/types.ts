export type PokemonData = {
  name: string
  url: string
}

export type PokemonDetails = {
  id: number
  name: string
  abilities: {
    ability: { name: string }
  }[]
  height: number
  weight: number
  moves: []
  sprites: { other: { "official-artwork": { front_default: string } } }
  types: { type: { name: string } }[]
  stats: { base_stat: string; stat: { name: string } }[]
}
