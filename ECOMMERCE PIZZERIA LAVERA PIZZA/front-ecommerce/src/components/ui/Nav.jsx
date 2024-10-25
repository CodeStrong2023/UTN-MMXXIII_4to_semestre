import { NavLink, useLocation } from "react-router-dom"
import { datanav } from "../../api/mocks/DataPizzeriaLavera"
import { useState } from "react"


export const Nav = () => {
  const[nav, setNav] = useState(datanav)
  const location = useLocation()
  const pathParts = location.pathname.split('/');
  const LastPath = pathParts[pathParts.length - 1] || 'Home'; 

  return (
    <nav className='w-full h-8 flex justify-around bg-white '>
      <h1 className='w-1/6 h-full flex items-center justify-center bg-white text-black font-semibold'> {LastPath}</h1>
      <div className="w-1/5 flex justify-between">
        <NavLink to='/' className='w-1/6 h-full flex items-center justify-center bg-white text-black font-semibold'>Home</NavLink>
        <NavLink to='/menu' className='w-1/6 h-full flex items-center justify-center bg-white text-black font-semibold'>Menu</NavLink>
        <NavLink to='/contact' className='w-1/6 h-full flex items-center justify-center bg-white text-black font-semibold '>Contact</NavLink>
        <NavLink to='/about' className='w-1/6 h-full flex items-center justify-center bg-white text-black font-semibold'>About</NavLink>
      </div>
    </nav>
  )
}
