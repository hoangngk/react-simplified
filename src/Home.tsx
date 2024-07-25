import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center p-10 bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Site!</h1>
      <p className="mb-8">Explore our products and learn more about us.</p>
      <Link
        to="/store"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Visit Store
      </Link>
    </div>
  )
}

export default Home