import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='top-0 z-10 sticky'>
      <div className="nav bg-[#d948ef] shadow-xl">
        <div className="container mx-auto  xl:flex flex-wrap justify-around py-2 items-center ">
            <div className="text">
              <Link to={'/'}><h1 className='flex justify-center text-2xl font-bold text-[#0a0a0b] py-1 items-center ' >E-Commerce</h1></Link>
            </div>
            <div className="pages">
                <ul className='flex items-center gap-4 justify-center pb-2 text-[#09090b] font-semibold text-md'>
                  <Link to={'/'} ><li className='cursor-pointer'>Home</li></Link>
                   <Link to={'/allpro'}><li className='cursor-pointer'>All Products</li></Link>
                   <Link to={'/signup'}><li className='cursor-pointer'>Signup</li></Link>
                   <Link to={'/login'}><li className='cursor-pointer'>Login</li></Link>
                   <Link to={'/card'}><li className='cursor-pointer'>Cart(0)</li></Link>
                   
                </ul>
            </div>
            <div className="searchbar flex justify-center">
                <input className='w-full md:w-96 xl:w-96 mx-6 py-2 px-2 rounded-md outline-none placeholder:text-gray-500 border-2 hover:border-gray-500' type="text" placeholder='Search here' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
