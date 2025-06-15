import React from 'react'



function Banner() {
  return (
    <div>
      <section>
      <div className="container mx-auto">
        <div  className='bg-gray-200 p-8 rounded-3xl'>
      <div className='flex'>
        <div className='bg-blue-800 p-2 px-8 rounded-4xl font-bold '>
        <button className='bg-white p-2 px-4 rounded-3xl text-blue-800 relative right-5'>ONE WAY</button>
        <button className='text-white relative left-4'>ROUND TRIP</button>
        </div>
      </div>

      <div className='py-10'>
        <div className='flex flex-wrap gap-5'>
        <input className='border p-5 px-10 rounded' type='text' placeholder='Enter Origin'></input>
        <input className='border p-5 px-10 rounded' type='text' placeholder='Enter Destination'></input>
        <input className='border p-5 px-10 rounded' type='text' placeholder='Enter Origin'></input>
        <input className='border p-5 px-10 rounded' type='text' placeholder='Enter Origin'></input>
        <input className='border p-5 px-10 rounded' type='text' placeholder='Enter Origin'></input>
        <input className='border p-5 px-10 rounded' type='text' placeholder='Enter Origin'></input>
        <input className='border p-5 px-10 rounded' type='text' placeholder='Enter Origin'></input>
      </div>
      </div>
      </div>
      </div>
      </section>
    </div>
    
  )
}

export default Banner
