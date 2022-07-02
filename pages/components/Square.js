import React, { useState } from 'react'

const Square = ({ square }) => {
    const [active, setActive] = useState(false)

    const handleSquare = () => {
        setActive(prev => !prev)
    }

  return (
    <div className={active ? 'square active' : 'square'} onClick={handleSquare}>
        <p>{square.title}</p>
    </div>
  )
}

export default Square