import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-16 flex items-center justify-between px-4'>
        <h1 className='font-bold text-xl'>React App</h1>
        <ul className='hidden sm:flex items-center gap-5 text-lg'>
            <li className='text-blue-500 font-bold'>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Projects</li>
        </ul>
        <button className='px-6 py-2 bg-blue-500 font-semibold text-md text-zinc-100 rounded-md'>Explore</button>
    </div>
  )
}

export default Navbar