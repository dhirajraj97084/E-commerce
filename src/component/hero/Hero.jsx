import React from 'react'

function Hero() {
  return (
    <div>
      <div className="herosection ">
        <div className="main_div md:h-80 xl:h-80 h-fit bg-[hsl(291,53%,77%)] ">
            <div className="container md:flex flex-wrap md:justify-around items-center ">
                <div className="text">
                 <h1 className='text-3xl md:text-4xl font-bold flex justify-center pb-1 pt-8'>YOUR <span className='mx-2 underline underline-offset-4 text-[#be185d] '> ONLINE SHOPE </span> </h1>
                  <h2 className='text-xl font-normal flex md:justify-start justify-center leading-8 pb-3'>24/7 Shop and Deliver anytime!</h2>
                </div>
                <div className="img flex shadow-xl justify-center">
                    <img className='w-56 mt-2 rounded-md ' src="https://images.pexels.com/photos/850358/pexels-photo-850358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
