import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'


function App() {

  const [count , setCount] = useState(0);

  function handle() {
    setCount(count+1);
  }

  return (
    <div>
      <Button 
        handle={handle}
        text="Click me"
      >
      <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
