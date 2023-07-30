import { useRouteData } from "solid-start"
import {
  createServerAction$,
  createServerData$,
  redirect,
} from "solid-start/server"
import { NavBar } from "~/components/NavBar"
import { getUser, logout } from "~/db/session"

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const user = await getUser(request)
    if (!user) {
      throw redirect("/login")
    }
    return user
  })
}

export default function Home() {
  const user = useRouteData<typeof routeData>()
  const [, { Form }] = createServerAction$((f: FormData, { request }) => {
    return logout(request)
  })
  return (
    <>
      <NavBar />
      <main class="container">
        <h1>Hello {user()?.username}</h1>
        <h3>Message board</h3>
        <Form>
          <button name="logout" type="submit">
            Logout
          </button>
        </Form>
      </main>
    </>
  )
}
