// import { useState } from 'react'
import React from 'react'

import boxes from './boxes'
import Box from './Box'
import './App.css'

function App() {
  
  const [squares, setSquares] = React.useState(boxes)

  const squaresHtml = squares.map((square) => {
    return <Box 
    on={square.on}
    key={square.id}
    id={square.id}
    />
  })

  return (
    <div className="box-container">
      {squaresHtml}
    </div>
  )
}

export default App
