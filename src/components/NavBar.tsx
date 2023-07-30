import { createEffect } from "solid-js"
import { SetStoreFunction, Store, createStore } from "solid-js/store"
import { setTheme } from "~/root"

export const NavBar = () => {
  return (
    <nav class="container-fluid">
      <ul>
        <li>
          <a href="./" class="contrast">
            <strong>Solid Start Demo</strong>
          </a>
        </li>
      </ul>
      <ul>
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
