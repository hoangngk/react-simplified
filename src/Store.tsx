import React from 'react'

const Store = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* Repeat for each item */}
      <div className="shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 rounded-lg">
        <img
          src="item-image-url"
          alt="Item"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h3 className="text-lg font-bold mt-2">Item Name</h3>
        <p className="text-gray-700">Item Description</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Store
