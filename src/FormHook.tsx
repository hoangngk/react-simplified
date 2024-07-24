import React from 'react'
import { useForm } from 'react-hook-form'

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="w-full max-w-lg space-y-4 bg-white p-8 rounded-lg shadow"
      >
        <input
          {...register('firstName')}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="First Name"
        />
        <input
          {...register('lastName', { required: true })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Last Name"
        />
        {errors.lastName && (
          <p className="text-red-500">Last name is required.</p>
        )}
        <input
          {...register('age', { pattern: /\d+/ })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Age"
        />
        {errors.age && (
          <p className="text-red-500">Please enter a number for age.</p>
        )}
        <input
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
        />
      </form>
    </div>
  )
}

export default FormHook
