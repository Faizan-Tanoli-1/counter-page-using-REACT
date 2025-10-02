import React, { useContext } from 'react'
import { themeContext } from '../App'

const Child3 = () => {

    const {theme, setTheme} = useContext(themeContext);

    function handleClick() {
        if(theme === 'light')
            setTheme('dark')
        else
            setTheme('light')
    }

  return (
    <div>
      <button onClick={handleClick}>
        Change Theme
      </button>
    </div>
  )
}

export default Child3
