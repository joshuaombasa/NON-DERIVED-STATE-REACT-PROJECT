import { useState } from 'react'
import boxes from './boxes'
import Box from './Box'
import './App.css'

function App() {
  
  const [squares, setSquares] = React.useState(boxes)

  const squaresHtml = squares.map((square) => {
    return {
      
    }
  })

  return (
    <div className="box-container">

    </div>
  )
}

export default App
