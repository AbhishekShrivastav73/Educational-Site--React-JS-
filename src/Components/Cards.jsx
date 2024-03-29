import React from 'react'
import { useState } from 'react'
function Cards() {

  

    const data = [
        {bannner: "", name :'Sheryians Coding School', forBegginers: true},
        {bannner: "", name :'Chai and Code', forBegginers: true},
        {bannner: "", name :'Apna College', forBegginers: false},
        {bannner: "", name :'Code with Harry', forBegginers: false},
        {bannner: "", name :'harkirat', forBegginers: true},
    ]

  return (
  
    data.map((elem,index)=> {
        let [number,Change] = useState(0)
        return (
            <div key={index} className='w-full md:w-60 bg-zinc-50 rounded-md overflow-hidden p-2 flex flex-col justify-between gap-2 flex-shrink-0'>
                <div className="img w-full h-64 md:h-44 bg-zinc-300">
                    <img src="" alt="" />
                </div>
                <h3 className='text-xl font-semibold'>{elem.name}</h3>
                <p className={elem.forBegginers ? 'text-blue-500 font-semibold' : 'text-red-500 font-semibold'}>{elem.forBegginers ? 'Easy For Begginers' : 'Difficult'}</p>
                <div className='flex items-center justify-between'>
                <button className='px-4 py-2 bg-blue-500 rounded-md font-semibold text-zinc-100'>Explore Playlist.</button>
                <div className="like"><span onClick={()=> Change((prev)=> prev + 1 )} className='text-xl cursor-pointer'>❤️</span> <span className='text-xl'>{number}</span></div>
                </div>
            </div>
        )
    })
    // 

  )
}

export default Cards