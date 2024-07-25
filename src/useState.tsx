import { ChangeEvent, useContext, useState } from 'react'
import { ThemeContext } from './App.tsx'

export default function UseState() {
  const context = useContext(ThemeContext)
  console.log('context', context)

  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  })

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    // treat the state as immutable and create a new object, if not, React will not re-render the component
    // person.firstName = e.target.value
    // setPerson(person)
    setPerson({
      ...person,
      firstName: e.target.value,
    })
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      lastName: e.target.value,
    })
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      email: e.target.value,
    })
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First name:
            <input
              value={person.firstName}
              onChange={handleFirstNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last name:
            <input
              value={person.lastName}
              onChange={handleLastNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
            <input
              value={person.email}
              onChange={handleEmailChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <p className="text-center text-gray-800 font-semibold">
          {person.firstName} {person.lastName} ({person.email})
        </p>
      </div>
    </>
  )
}
