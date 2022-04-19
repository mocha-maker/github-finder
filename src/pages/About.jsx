import React from 'react'

function About() {
  return (
    <>
      <h1 className="text-5xl mb-4">About</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.udemy.com/course/react-front-to-back-2022'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <div className='pl-8 my-4'>
        <h3 className='text-3xl mb-4'>Updates</h3>
        <span>These are updates that were added by mocha-maker.</span>
        <ul className='list-disc mt-4 ml-10'>
          <li>Add Sorting by Stars to Repo List</li>
          <li>Change Repo List grid layout to be more responsive</li>
          <li>Added icon link to github page site if available</li>
          <li>Various UI changes</li>
        </ul>
      </div>
  
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.1</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p>
    </>
  )
}

export default About