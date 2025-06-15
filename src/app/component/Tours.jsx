
import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { travels } from '../../../data';




function Tours() {
  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div className='py-4'>
            <h1 className='text-[40px] font-bold text-center'>Best Selling Packages</h1>
            <p className='text-center text-[20px] py-3 text-gray-600 font-semibold'>Enjoy the exclusive package tours with us.</p>
            </div>
           <div className='flex flex-wrap gap-10 '>
            {travels.slice(0,6).map(a=>(
              <div className='bg-white shadow'>
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

      <section className='py-12'>
        <div className="container mx-auto flex justify-between">

        <div>
          <h1 className='text-[35px] font-bold'>More Destinations</h1>
          {travels.slice(58,64).map(a=>(
            <div>
           <p className='text[20px] font-bold py-2'>{a.parag}</p>
           </div>
          ))}
           
          </div>
          
          
            {travels.slice(64,67).map(a=>(
              <div>
            <img className='w-90 h-60' src={a.img} alt="" />
            <div className='flex justify-between p-4 text-white font-bold relative bottom-14'>
              <p>{a.country}</p>
              <p>{a.days}</p>
            </div>
            </div>
            ))}
        </div>
      </section>

      <section className='py-12 '>
        <div className='bg-gray-100'>
        <div className="container mx-auto py-8">
          <div className='py-8'>
            <h1 className='text-[40px] font-bold text-center'>Highlighted Packages</h1>
            <p className='text-center text-[20px] py-3 text-gray-600 font-semibold'>Travel packages loved by many.</p>
            </div>
           <div className='flex flex-wrap gap-10 '>
            {travels.slice(6,9).map(a=>(
              <div className='bg-white shadow'>
                <img className='w-120' src={a.img} alt="" />
                <div className='p-5'>
                <h1 className='text-[20px] font-bold py-2'>{a.heading}</h1>
                <p className='text-[20px]  text-gray-600 font-semibold'>{a.title}</p>
                <div className='flex justify-between py-3'>
                <p className='font-semibold text-[18px] text-gray-600'>{a.review}</p>
                <p className='font-semibold text-[18px] flex items-center gap-2 text-gray-600'><CiAlarmOn/>{a.days}</p>
                </div>
               </div>
            </div>
            ))}
            </div>
            </div>
        </div>
      </section>




      <section className='py-12 '>
        <div className="container mx-auto py-8">
          
           <div className='flex flex-wrap gap-10 '>
            {travels.slice(9,15).map(a=>(
              <div className='bg-white shadow'>
                <img className='w-120' src={a.img} alt="" />
                <div className='p-5'>
                <h1 className='text-[20px] font-bold py-2'>{a.heading}</h1>
                <p className='text-[20px]  text-gray-600 font-semibold'>{a.title}</p>
                <div className='flex justify-between py-3'>
                <p className='font-semibold text-[18px] text-gray-600' >{a.review}</p>
                <p className='font-semibold text-[18px] flex items-center gap-2 text-gray-600'><CiAlarmOn/>{a.days}</p>
                </div>
               </div>
            </div>
            ))}
            </div>
        </div>
      </section>


      <section className='py-12'>
        <div className='bg-gray-100'>
        <div className="container mx-auto py-8">
          <h1 className='text-[40px] font-bold text-center'>What our clients are saying about us</h1>
         <div className='flex  justify-center gap-8 py-8 '>
          {travels.slice(15,17).map(a=>(
              
          <div className='bg-white gap-10 p-5 text-center shadow'>
          <h1 className='text-[20px] font-bold py-3'>{a.heading}</h1>
          <p className='text-[18px] font-semibold text-base/8 text-gray-600'>{a.parag}</p>
          <img className='mx-auto py-4' src={a.img} alt="" />
          <p className='text-gray-600 text-[18px] font-semibold'>{a.name}</p>
          <p className='text-gray-600 text-[18px] font-semibold'>{a.country}</p>
          </div> 
          
          ))}
        </div>

        </div>
        </div>
      </section>


      <section>
        <div className="container mx-auto">
          <div className='py-4'>
            <h1 className='text-[40px] font-bold text-center'>Best Travel Agency in Nepal</h1>
            <p className='text-center text-[20px] py-3 text-gray-600 font-semibold'>Why Ime Travels</p>
            </div>
            <div className='flex justify-between gap-20 text-center'>
            {travels.slice(17,21).map(a=>(
            
              <div>
                <img className='mx-auto py-5' src={a.img} alt="" />
                <h1 className='text-[25px] font-bold py-3'>{a.title}</h1>
                <p className='text-[18px] font-semibold text-gray-600'>{a.parag}</p>
              </div> 
            
            ))}
            </div>

        </div>
      </section>


      <section>
        <div className="container mx-auto">
          <div className='py-4'>
            <h1 className='text-[40px] font-bold text-center'>Travel Blog</h1>
            <p className='text-center text-[20px] py-3 text-gray-600 font-semibold'>Checkout latest news and articles from our blog</p>
            </div>
           <div className='flex justify-between '>
            {travels.slice(21,24).map(a=>(
              <div className=''>
                <img className='w-120' src={a.img} alt="" />
                <div className='p-5 bg-white shadow '>
                <p className='text-[16px]  text-gray-600 font-semibold'>{a.title}</p>
                <h1 className='text-[20px] font-bold py-2'>{a.heading}</h1>
                <div className='flex justify-between py-3'>
                <p className='font-semibold text-[18px] flex items-center gap-2 text-gray-600'><SlCalender />{a.calender}</p>
                <p className='font-semibold text-[18px] flex items-center gap-2 text-gray-600'><FaRegUser />{a.user}</p>
                </div>
               </div>
            </div>
            ))}
            </div>

        </div>
      </section>


      <section className='py-10'>
        <div className="container mx-auto">
          <h1 className='text-[40px] font-bold text-center py-6'>Airlines Partners</h1>
        
          
          <div className='flex gap-10'>
            {travels.slice(41,49).map(a=>(
              <img src={a.img} alt="" />
         
            ))}
          
          </div>

        </div>
      </section>

      <section className='overflow-x-hidden py-10 '>
        <div className="container mx-auto border-b border-blue-800 border-t">
          <div className='flex justify-center gap-40'>
        <h1 className='text-[40px] font-bold  py-3'>Associated Organizations</h1>
        <h1 className='text-[40px] font-bold  py-3'>Payment Partners</h1>
        </div>
        <div className='flex justify-center gap-40'>
        <div className='flex  justify-center gap-10 py-8  '>
          {travels.slice(49,54).map(a=>(
          <div className=' gap-10 p-5  '>
          <img  src={a.img} alt="" />
          </div> 
          
          ))}
        </div>

        <div className='flex  justify-center gap-10 py-8 '>
          {travels.slice(54,58).map(a=>(
          <div className=' gap-10 p-5  '>
          <img  src={a.img} alt="" />
          </div> 
          
          ))}
        </div>
            </div>
            </div>
          
         

        
      </section>

    </div>
  )
}

export default Tours
