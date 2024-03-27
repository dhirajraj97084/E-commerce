import React from 'react'

function Catogry() {
  return (
    <div>
      <div className="catogry ">
        <div className="container grid xl:grid-cols-8 md:grid-cols-4 grid-cols-3 pt-4 pl-12 md:pl-16  space-y-2">
            <div className="box1 w-1/3 md:w-0 ">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold'>Fashion</h1>
            </div>
            <div className="box2 w-1/3 md:w-0 text-center ">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold  '>Shirts</h1>
            </div>
            <div className="box3 w-1/3 md:w-0 ">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold'>Jacket</h1>
            </div>
            <div className="box4 w-1/3 md:w-0 ">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold'>Mobile</h1>
            </div>
            <div className="box5 w-1/3 md:w-0 ">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold'>Laptop</h1>
            </div>
            <div className="box6 w-1/3 md:w-0 ">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold'>Shoes</h1>
            </div>
            <div className="box7 w-1/3 md:w-0 hidden md:block">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold'>Home</h1>
            </div>
            <div className="box8 w-1/3 md:w-0 hidden md:block  ">
               <div className="rounded-full w-20 h-20 bg-[#d948ef] flex justify-center items-center ">
                <img className='w-16 h-16 rounded-full' src="https://images.pexels.com/photos/10297673/pexels-photo-10297673.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1" alt="img" />
               </div>
               <h1 className=' text-xl font-semibold'>Books</h1>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Catogry
