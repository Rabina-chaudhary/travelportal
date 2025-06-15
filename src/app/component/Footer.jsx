import React from 'react'
import { travels } from '../../../data'
import { FaFacebook,FaYoutube,FaInstagram ,FaLinkedin   } from "react-icons/fa";

function Footer() {
  return (
    <div className='py-10'>
        <section className='py-10 bg-green-600'>
      <div className="container mx-auto">
<div>
<h1 className='text-[40px] font-bold text-center py-8'>Hunting Line: 0977-1-4529467</h1>
</div>
<div className='flex justify-between'>
    <div>
        <h1 className='text-[25px] font-bold py-5'>Quick Links</h1>
        <ul>
            {travels.slice(24,30).map(a=>( 
            <li className='text-[18px] font-semibold py-1'>{a.parag}</li>       
        ))}
        </ul> 
    </div>

    <div>
        <h1 className='text-[25px] font-bold py-5'>Nepal Tour</h1>
        <ul>
        {travels.slice(30,35).map(a=>(    
            <li  className='text-[18px] font-semibold py-1' >{a.parag}</li> 
        ))}
        </ul> 
        
    </div>

    <div>
        <h1 className='text-[25px] font-bold py-5'>International Tour</h1>
        <ul>
        {travels.slice(35,41).map(a=>(          
            <li  className='text-[18px] font-semibold py-1'>{a.parag}</li>        
        ))}
        </ul> 
    </div>

    <div>
        <h1 className='text-[25px] font-bold py-5'>Newsletter Signup</h1>
       <p  className='text-[18px] font-semibold py-5'>Subscribe now and recieve a 50% discount on your next tour booking</p>
       <div className='border rounded-3xl p-3 text-[20px]'>
       <input type='text' placeholder='Enter your mail'></input>
       </div>
       <div className='py-8'>
       <button className=' bg-blue-800 p-3 px-40 rounded-3xl text-[20px] text-white uppercase'>Sign Up</button>
    </div>
    </div>
</div>


<div className='py-10  flex justify-between'>
    <div>
<ul className='flex text-[20px] font-bold  gap-12'>
        <li>About  </li>
        <li>Contact Us</li>
        <li>Useful Information</li>
        </ul>
        </div>
        <div className='flex text-[30px] font-bold  gap-12'>
        <FaFacebook />
    <FaYoutube />
    <FaInstagram />
    <FaLinkedin />
    </div>
    
    
</div>
<div>
    <p className='text-[18px] font-semibold text-center'>©Copyright. All Rights Reserved. Website brought into life by Makura Creations Pvt. Ltd</p>
</div>
      </div>
      </section>
    </div>

  )
}

export default Footer
