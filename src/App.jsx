import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'

function App() {
  return (
    <div className='bg-zinc-200'>
      <div className='heroSection  w-full md:h-screen mb-6'>
        <Navbar/>
        <Hero/>
      </div>
      <div id="coursesSection" className='w-full border-top-1 flex flex-col py-4 px-6  gap-6'>
        <div className='border-2 border-zinc-500'></div>
        <h2 className='font-black text-4xl text-blue-500'>Top PlayLists</h2> 
        <div className='flex w-full flex-col gap-12 md:flex-row flex-wrap justify-center'>
          <Cards/>
        </div>
      </div>
    </div>
  )
}

export default App