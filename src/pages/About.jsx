import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Lord of the Rings Wiki</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search facts from the fantastic world of the Lord of the Rings<br/>
        Using <a className='text-white' href='https://the-one-api.dev/' target="_blank">the-one-api</a>
      </p>
      <p className='text-lg text-gray-400'>
        Technologies used: <span className='text-white'>ReactJS, Tailwind CSS, axios</span>
      </p>
    </div>
  )
}

export default About