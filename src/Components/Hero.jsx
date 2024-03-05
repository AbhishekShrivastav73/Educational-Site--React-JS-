import React from 'react'

function Hero() {
  return (
    <div className='w-full'>
        <div className="banner  h-56 m-6  rounded-xl border-black flex items-center justify-center" >
            <img  className='w-full h-full object-cover object-left
            ' src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <h2 className='mx-6 text-4xl font-bold sm:text-5xl lg:text-6xl'>Start Your <br /> <span className='text-blue-500'>Web Development Journey</span> <br /> with Best Playlists. </h2>
    </div>
  )
}

export default Hero