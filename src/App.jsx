import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCity from './components/AddCity'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-5xl'>Weather App with Redux-Toolkit</h1>
    <AddCity/>
    </>
  )
}

export default App
