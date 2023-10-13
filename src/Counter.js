import React from 'react'
import './App.css'

// props = {update, count}
function Counter({update, count}) {
  return (
    <div className='App'>
        <button onClick={() => update("INC")}>Increment</button>
        <p>{count}</p>
        <button onClick={() => update("DEC")}>Decrement</button>
    </div>
  )
}

export default Counter