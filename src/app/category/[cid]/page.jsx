"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { travels } from '../../../../data'
import { CiAlarmOn } from "react-icons/ci";


function page() {
    let {cid}=useParams()
    let data=travels.filter(a=>a.category==cid)
  return (
    <>
    <section>
            <div className="container mx-auto">
              
               <div className='flex flex-wrap gap-10 '>
                {data.map(a=>(
                  <div className='bg-white shadow'>
                    <p>{a.category}</p>
                    <img className='w-120' src={a.img} alt="" />
                    <div className='p-5'>
                    <h1 className='text-[20px] font-bold py-2'>{a.heading}</h1>
                    <p className='text-[20px]  text-gray-600 font-semibold'>{a.title}</p>
                    <div className='flex justify-between py-3'>
                    <p className='font-semibold text-[18px] text-gray-600'>{a.review}</p>
                    <p className='font-semibold text-[18px] flex items-center gap-2 text-gray-600 '><CiAlarmOn/>{a.days}</p>
                    </div>
                   </div>
                </div>
                ))}
                </div>
    
            </div>
          </section>
         
    </>
  )
}

export default page
