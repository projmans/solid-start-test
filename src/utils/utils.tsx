import { createEffect } from "solid-js"
import { createStore, SetStoreFunction, Store } from "solid-js/store"

export const validateUsername = (username: unknown) => {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`
  }
}

export const validatePassword = (password: unknown) => {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`
  }
}

// Not working: localStorage not defined in server
// export function createLocalStore<T extends object>(
//   name: string,
//   init: T
// ): [Store<T>, SetStoreFunction<T>] {
//   const localState = localStorage.getItem(name)
//   const [state, setState] = createStore<T>(
//     localState ? JSON.parse(localState) : init
//   )
//   createEffect(() => localStorage.setItem(name, JSON.stringify(state)))
//   return [state, setState]
// }

// export function removeIndex<T>(array: readonly T[], index: number): T[] {
//   return [...array.slice(0, index), ...array.slice(index + 1)]
// }
