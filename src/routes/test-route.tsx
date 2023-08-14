import { A, Title } from "solid-start"
import { createServerData$, redirect } from "solid-start/server"
import { getUser } from "~/db/session"

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const user = await getUser(request)
    if (!user) {
      throw redirect("/login")
    }
    return user
  })
}

export default () => (
  <main class="container">
    <Title>Test route</Title>
    <hgroup>
      <h1>Hi there</h1>
      <h2>{"There's nothing here. Come back later :)"}</h2>
    </hgroup>
    <div>
      <A href="/">Go back</A>
    </div>
  </main>
)
