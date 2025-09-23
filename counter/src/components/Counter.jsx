import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
      <div className="counter_container">
        <p id="para">You Have Clicked {count} times.</p>
        <button id="btn" onClick={()=> {setCount(count+1)}}>Clicked to add</button>
        <button id="btn" onClick={()=> {setCount(count-1)}}>Clicked to minus</button>
      </div>
  )
}

export default Counter
