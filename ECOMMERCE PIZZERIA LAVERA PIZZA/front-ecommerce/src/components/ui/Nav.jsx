import { NavLink, useLocation } from "react-router-dom";
import { datanav } from "../../api/mocks/DataPizzeriaLavera";
import { useState } from "react";
import { useSelector } from "react-redux";
import userIcon from '/icons/userSvg.svg';
import Cart from "./Cart";

export const Nav = () => {
  const [nav, setNav] = useState(datanav);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const LastPath = pathParts[pathParts.length - 1] || 'Home';
  const user = useSelector(state => state.user);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='w-full h-16 flex items-center justify-between px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md text-white'>
      {/* Current Page Title */}
      <h1 className='text-lg font-semibold'>LA VERA PIZZA</h1>

      {/* Hamburguesa para dispositivos móviles */}
      <button
        onClick={toggleMobileMenu}
        className="sm:hidden flex items-center p-2 rounded-md focus:outline-none hover:bg-gray-700 transition-transform"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links - desktop y móvil */}
      <div className={`flex-col sm:flex-row sm:flex gap-4 items-center z-10 ${
          isMobileMenuOpen ? 'flex' : 'hidden sm:flex'
        } sm:static absolute top-16 left-0 w-full bg-gradient-to-b from-gray-800 to-black sm:bg-none sm:w-auto sm:p-0 p-4`}>
        
        <NavLink to='/' className={({ isActive }) => 
          `px-3 py-2 rounded-lg font-medium transition ${
            isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`
        }>
          Home
        </NavLink>
        <NavLink to='/menu' className={({ isActive }) => 
          `px-3 py-2 rounded-lg font-medium transition ${
            isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`
        }>
          Menu
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => 
          `px-3 py-2 rounded-lg font-medium transition ${
            isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`
        }>
          Contact
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => 
          `px-3 py-2 rounded-lg font-medium transition ${
            isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`
        }>
          About
        </NavLink>
        <NavLink to='/login' className={({ isActive }) => 
          `px-3 py-2 rounded-lg font-medium transition ${
            isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`
        }>
          Login
        </NavLink>

        {/* User Profile */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <img src={userIcon} alt="User Icon" className="h-6 w-6 rounded-full bg-gray-700 p-1" />
          <h1 className="text-sm font-medium">{user?.user || 'Guest'}</h1>
        </div>

        {/* Cart Icon */}
        <Cart />
      </div>
    </nav>
  );
}
