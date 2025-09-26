import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import Login from './components/login'
import Logout from './components/logout'


function App() {

  const [count , setCount] = useState(0);

  function handle() {
    setCount(count+1);
  }

  const [isLogin, setLogin] = useState(true);

  if(isLogin) {
    return (
      <Logout/>
    )
  } else {
    return (
      <Login/>
    )
  }



  // return (
  //   <div>
  //     <Button 
  //       handle={handle}
  //       text="Click me"
  //     >
  //     <h1>{count}</h1>
  //     </Button>
  // )
}

export default App
