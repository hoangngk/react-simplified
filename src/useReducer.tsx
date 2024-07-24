import React, { useReducer } from 'react'

const reducer = (state: number, action: string) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0 // Reset state to 0
    default:
      return state
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch('INCREMENT')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch('DECREMENT')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch('RESET')}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default UseReducer
