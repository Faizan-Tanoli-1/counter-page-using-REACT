import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/Child1'
import { createContext } from 'react'

const themeContext = createContext();

function App() {

  const [theme,setTheme] = useState('light');

  return (
    <themeContext.Provider value={{theme,setTheme}}>
    <div 
    id='container' 
    style={{backgroundColor:theme==='light'?"beige":"black"}}>
       <Child1/>
    </div>
    </themeContext.Provider>
  )
}

export default App
export {themeContext}