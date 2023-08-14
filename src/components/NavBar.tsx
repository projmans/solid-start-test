import { A } from "solid-start"
import { setTheme } from "~/root"
import { useLocation } from "solid-start"

export const NavBar = () => {
  const location = useLocation()
  return (
    <nav class="container-fluid">
      <ul>
        <li>
          <A
            href="./"
            class={location.pathname === "/" ? "contrast" : "secondary"}
          >
            <strong>Solid Start Demo</strong>
          </A>
        </li>
        <li>
          <A
            href="./pokemon-finder"
            class={
              location.pathname === "/pokemon-finder" ? "contrast" : "secondary"
            }
          >
            <span>Pokemon</span>
          </A>
        </li>
        <li>
          <A
            href="./test-route"
            class={
              location.pathname === "/test-route" ? "contrast" : "secondary"
            }
          >
            <span>Test Screen</span>
          </A>
        </li>
      </ul>
      <ul>
        <li>
          <A href="./test-route" class="secondary">
            <span>Log out</span>
          </A>
        </li>
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" class="secondary">
              Theme
            </summary>
            <ul role="listbox">
              <li>
                <div onClick={() => setTheme("light")}>Light</div>
              </li>
              <li>
                <div onClick={() => setTheme("dark")}>Dark</div>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  )
}
