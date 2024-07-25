import React from 'react'
import { Link } from 'react-router-dom' // Assuming you're using react-router for navigation

const TeamNav = () => {
  return (
    <nav className="bg-gray-800 text-white p-6 shadow-md">
      <ul className="flex space-x-4 justify-center text-lg">
        <li>
          <Link to="/team/joe" className="hover:text-gray-300">
            Team Member - Joe
          </Link>
        </li>
        <li>
          <Link to="/team/sally" className="hover:text-gray-300">
            Team Member - Sally
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default TeamNav
