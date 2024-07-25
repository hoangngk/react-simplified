import React from 'react'
import { Link } from 'react-router-dom' // Assuming you're using react-router for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-6 shadow-md">
      <ul className="flex space-x-4 justify-center text-lg">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/store" className="hover:text-gray-300">
            Store
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/team" className="hover:text-gray-300">
            Team
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
