'use client'; 

import { useState } from 'react';
import React from 'react'
import { FaSearch } from "react-icons/fa";



function Banner() {
  const [tripType, setTripType] = useState('oneway');
  return (


    <div className=" bg-cover bg-center z-0 min-h-screen flex  overflow-hidden relative">
      <img className='absolute inset-0' src="https://imetravels.com/wp-content/uploads/2025/04/Artboard-1-copy-3.jpg" alt="" />
  <div className="bg-white bg-opacity-90 rounded-xl p-6 max-w-6xl w-full">

    
    <div className='container mx-auto relative z-10 top-24 left-12 bg-white w-[180%] py-10 px-10 rounded-2xl'> 
      <div className="inline-flex rounded-full bg-blue-800 p-1 mb-6">
        <button
          onClick={() => setTripType('oneway')}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
            tripType === 'oneway' ? 'bg-gray-100 text-green-900 font-bold' : 'text-white hover:bg-gray-300'
          }`}
        >
          ONE WAY
        </button>
        <button
          onClick={() => setTripType('roundtrip')}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition ${
            tripType === 'roundtrip' ? 'bg-gray-100 text-green-900 font-bold' : 'text-white hover:bg-gray-300'
          }`}
        >
          ROUND TRIP
        </button>
    </div>
  


  
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
   
    <div class="col-span-1">
      <label class="block text-sm font-medium text-gray-700 mb-1">Origin</label>
      <input type="text" placeholder="Enter Origin" className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
    </div>

   
    <div class="col-span-1">
      <label class="block text-sm font-medium text-gray-700 mb-1">Destination</label>
      <div class="relative">
        <input type="text" placeholder="Enter Destination" className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <span class="text-gray-400">↔</span>
        </div>
      </div>
    </div>

 
    <div class="col-span-1">
      <label class="block text-sm font-medium text-gray-700 mb-1">From Date</label>
      <input type="date" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

  
    <div class="col-span-1">
      <label class="block text-sm font-medium text-gray-700 mb-1">To Date</label>
      <input type="date" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

   
    <div class="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">Traveller(s), Class</label>
      <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option>1 Traveller(s) - Economy</option>
        <option>2 Traveller(s) - Business</option>
        <option>3 Traveller(s) - First Class</option>
      </select>
    </div>

    <div class="col-span-1 flex items-end">
      <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
        <FaSearch className='relative top-3 left-4' /><p className='relative bottom-2'>Search Flight</p> 
      </button>
    </div>
  </div>

  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
   
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
      <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option>Nepalese</option>
        <option>Indian</option>
        <option>Other</option>
      </select>
    </div>

    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Select A Fare Type</label>
      <div className="flex items-center space-x-4 mt-1">
        <label className="inline-flex items-center">
          <input type="radio" name="fare" className="form-radio text-blue-500" />
          <span className="ml-2 text-gray-700">Special Fares</span>
        </label>
      </div>
    </div>
  </div>
</div>
</div>
</div>


     
    
  )
}

export default Banner
