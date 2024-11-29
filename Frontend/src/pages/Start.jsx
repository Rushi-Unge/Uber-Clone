import React from 'react'
import { Link } from 'react-router-dom'

const Start= () => {
  return (
    <section className='bg-no-repeat bg-[url(https://images.pexels.com/photos/1959841/pexels-photo-1959841.jpeg?auto=compress&cs=tinysrgb&w=400)] h-screen w-full pt-8 flex justify-between flex-col'>
     {/* Uber Logo  */}
      <img
      className='w-16 ml-8'
       src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber-logo" />

       {/* Get Started  */}
      <div className='bg-white px-4 py-4 pb-7'>
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <Link to={'/login'} className='flex items-center justify-center bg-black w-full text-white px-3 py-2 rounded mt-4'>Continue</Link>
      </div>
    </section>
  )
}

export default Start
