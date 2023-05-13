import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Calculator } from './components/Calculator'

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  )
}

export default App
