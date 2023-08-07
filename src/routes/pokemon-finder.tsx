import { For, createResource, createSignal } from "solid-js"
import { GridButton } from "~/components/GridButton"
import { NavBar } from "~/components/NavBar"
import { fetchAllPokemons } from "~/fetch/fetchers"
import { useNavigate } from "solid-start"

export default function PokemonFinder() {
  const [currentOffset, setCurrentOffset] = createSignal("0")

  const [pokemons, { refetch }] = createResource(() =>
    fetchAllPokemons(currentOffset())
  )
  const handleOffset = (action: "increase" | "decrease") => {
    switch (action) {
      case "increase":
        setCurrentOffset(prevValue => (Number(prevValue) + 150).toString())
        break
      case "decrease":
        setCurrentOffset(prevValue =>
          prevValue !== "0" ? (Number(prevValue) - 150).toString() : "0"
        )
        break
    }
    refetch()
  }
  const navigate = useNavigate()
  return (
    <>
      <NavBar />
      <main class="container" style={{ "justify-content": "center" }}>
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-evenly",
            height: "5vh",
            "margin-bottom": "var(--spacing)",
          }}
        >
          <button
            class="outline"
            style={{ "max-width": "5vh", padding: 0, "margin-bottom": 0 }}
            onClick={() => handleOffset("decrease")}
          >
            {"<"}
          </button>
          <h2 style={{ "margin-bottom": 0 }}>
            {Number(currentOffset()) + 1} - {Number(currentOffset()) + 150}
          </h2>
          <button
            class="outline"
            style={{ "max-width": "5vh", padding: 0, "margin-bottom": 0 }}
            onClick={() => handleOffset("increase")}
          >
            {">"}
          </button>
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
                onClick={() => navigate(`/pokemon/${pokemon.name}`)}
              />
            )}
          </For>
        </div>
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            "justify-content": "space-evenly",
            height: "5vh",
          }}
        >
          <button
            class="outline"
            style={{ "max-width": "5vh", padding: 0, "margin-bottom": 0 }}
            onClick={() => handleOffset("decrease")}
          >
            {"<"}
          </button>
          <button
            class="outline"
            style={{ "max-width": "5vh", padding: 0, "margin-bottom": 0 }}
            onClick={() => handleOffset("increase")}
          >
            {">"}
          </button>
        </div>
      </main>
    </>
  )
}
