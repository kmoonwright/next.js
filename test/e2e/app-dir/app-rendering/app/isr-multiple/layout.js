import { experimental_use as use } from 'react'

async function getData() {
  return {
    message: 'hello from layout',
    now: Date.now(),
  }
}

export default function gspLayout(props) {
  const data = use(getData())

  return (
    <>
      <h1 id="layout-message">{data.message}</h1>
      <p id="layout-now">{data.now}</p>
      {props.children}
    </>
  )
}
