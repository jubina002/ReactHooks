import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const[count, setCount] = useState(0)
  return (
    <div className='container'>
        <p id='para'>You clicked {count} times !!</p>
        <button className='btn' onClick={() => {setCount(count+1)}}>Click Me</button>  
    </div>
  )
}

export default Counter
