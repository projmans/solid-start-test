import { For, Show, createResource } from "solid-js"
import { PokemonDetails } from "../../types"
import { fetchPokemonData } from "../../fetch/fetchers"
import { Spinner } from "../../components/Spinner/Spinner"
import { capitalizeFirstLetter } from "../../utils/utils"
import { useLocation } from "solid-start"

export default function Details() {
  const pokemonName = useLocation().pathname.split("/").at(-1)!
  const [pokemon] = createResource<PokemonDetails>(() =>
    fetchPokemonData(pokemonName)
  )

  return (
    <main class="container" style={{ "justify-content": "center" }}>
      <Show when={!pokemon.loading} fallback={<Spinner />}>
        <article style={{ margin: 0 }}>
          <div
            style={{
              display: "flex",
              "flex-direction": "row",
              "justify-content": "space-evenly",
              "align-items": "center",
            }}
          >
            <div
              style={{
                display: "flex",
                "flex-direction": "column",
                "justify-content": "space-evenly",
                "align-items": "center",
                "text-align": "center",
              }}
            >
              <strong>
                {capitalizeFirstLetter(pokemon()!.name)} - #{pokemon()!.id}
              </strong>
              <div>
                <div>
                  <img
                    src={
                      pokemon()!.sprites.other["official-artwork"].front_default
                    }
                    alt={pokemon()!.name}
                  />
                </div>
                <strong>Types:</strong>
                <For each={pokemon()!.types}>
                  {type => <p>{capitalizeFirstLetter(type.type.name)}</p>}
                </For>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                "flex-direction": "column",
                "border-left": "4px solid black",
                "padding-left": "15px",
                "padding-right": "15px",
              }}
            >
              <div>
                <strong>Stats:</strong>
                <For each={pokemon()!.stats}>
                  {stat => (
                    <p>
                      {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                    </p>
                  )}
                </For>
              </div>
              <div>
                <strong>Height:</strong>
                <p>{pokemon()!.height}</p>
              </div>
              <div>
                <strong>Weight:</strong>
                <p>{pokemon()!.weight}</p>
              </div>
              <div>
                <strong>Abilities: </strong>
                <For each={pokemon()!.abilities}>
                  {ability => (
                    <p>{capitalizeFirstLetter(ability.ability.name)}</p>
                  )}
                </For>
              </div>
            </div>
          </div>
        </article>
      </Show>
    </main>
  )
}
