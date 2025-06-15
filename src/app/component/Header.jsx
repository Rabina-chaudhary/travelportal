import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram ,FaLinkedinIn,FaPhoneAlt,FaEnvelope ,FaSearch     } from "react-icons/fa";
import { category } from '../../../data';
import Link from 'next/link';

function Header() {
  return (
  
    <div>
      <section className='bg-blue-800'>
        <div className="container mx-auto flex justify-between text-white p-3">
            <div className='flex  items-center gap-5 text-[20px]'>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            </div>
            <div>
                <ul className=' flex gap-5 items-center text-[20px]'>
                   <FaPhoneAlt /> 
                   <li>   +977-1-4529467 (Hunting Line)</li>
                    <FaEnvelope />
                    <li> sales@imetravels.com</li>
                </ul>
            </div>

        </div>
      </section>

      <section className='py-8'>
        <div className="container mx-auto flex justify-between items-center">
            <div>
              <Link href="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3bLmt5MFllXgGBzuQhGQmWxt5nMkM4O8xyA&s" alt="" />
          </Link> 
          </div>
           <div className='flex gap-7 text-[20px]'>
            <ul className='flex justify-between gap-7 text-[20px] items-center'>
                           {category.map(a=>( 
                               <li><Link href={`/category/${a.id}`}>{a.name}</Link></li>                             
                            ))}
            </ul>
            <button className='border p-2 px-5 bg-blue-800 text-white rounded-3xl'>Staff Login</button>
                <button className='border p-2 px-5 bg-blue-800 text-white rounded-3xl'>Agent Login</button>
                <FaSearch  className='relative top-3'/>
           </div>
        </div>
      </section>
    </div>
  )
}

export default Header
