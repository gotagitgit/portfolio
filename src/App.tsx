import React from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './react.svg'
import { Counter } from './Counter'

export const App = () => {
  return (
    <>
      <h1>
        Hello React App from scratch - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" />
      <Counter />
    </>
  )
}
