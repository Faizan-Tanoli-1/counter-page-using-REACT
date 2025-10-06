import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to='/'>HOME</Link>
        </li>
        <li>
            <Link to='About'>ABOUT</Link>
        </li>
        <li>
            <Link to='Dashboard'>DASHBOARD</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
