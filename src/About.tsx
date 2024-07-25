import React from 'react'

const About = () => {
  return (
    <div className="space-y-4 p-4">
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">About Us</h2>
        <p>
          We are a team dedicated to providing the best products and services.
        </p>
      </section>
      <section className="flex space-x-4">
        <img
          src="about-image-url"
          alt="About Us"
          className="w-1/2 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p>
            To deliver unparalleled quality and ensure customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
