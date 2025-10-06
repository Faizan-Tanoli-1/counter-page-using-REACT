import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';
import UseParam from './components/useParam';
import Courses from './components/Courses';
import Mock_Set from './components/Mock_Set';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
    path:"/",
    element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
    path:"/About",
    element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
    path:"/Dashboard",
    element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
      {
        path:"Courses",
        element:<Courses/>
      },
      {
        path:"Mock_Set",
        element:<Mock_Set/>
      }
      ]
    },
    {
      path: "*",
      element:<NotFound />
    },
    {
      path: "/students/:id",
      element: <UseParam/>
    }
]
);
function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
