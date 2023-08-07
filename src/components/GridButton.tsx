import { Component } from "solid-js"
import { capitalizeFirstLetter } from "../utils/utils"

type Props = {
  name: string
  url: string
  onClick: () => void
}

export const GridButton: Component<Props> = props => {
  return (
    <button style={{ "margin-bottom": 0 }} onClick={props.onClick}>
      {capitalizeFirstLetter(props.name)} - {props.url.split("/").reverse()[1]}
    </button>
  )
}
