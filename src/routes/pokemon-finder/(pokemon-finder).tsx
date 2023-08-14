import { For, createResource, createSignal } from "solid-js"
import { GridButton } from "~/components/GridButton"
import { fetchAllPokemons } from "~/fetch/fetchers"
import { useNavigate } from "solid-start"
import { Pokeball } from "~/components/Pokeball"

export default function PokemonFinder() {
  const [pokemons] = createResource(() => fetchAllPokemons())

  const navigate = useNavigate()
  return (
    <main class="container" style={{ "justify-content": "center" }}>
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          "justify-content": "center",
        }}
      >
        <Pokeball />
        <h1
          style={{
            "padding-left": "20px",
            "padding-right": "20px",
          }}
        >
          Pokedex
        </h1>
        <Pokeball />
      </div>
      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fill, minmax(200px, 1fr))",
          "grid-gap": "10px",
          "margin-bottom": "var(--spacing)",
        }}
      >
        <For each={pokemons()}>
          {pokemon => (
            <GridButton
              name={pokemon.name}
              url={pokemon.url}
              onClick={() => navigate(`/pokemon-finder/${pokemon.name}`)}
            />
          )}
        </For>
      </div>
    </main>
  )
}
