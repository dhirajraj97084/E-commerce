import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../component/layout/Layout'
function Login() {
  return (
    <Layout>
      <div className="main bg-[hsl(291,31%,70%)] h-screen flex justify-center items-center">
        <div className="box bg-[hsl(291,33%,80%)] p-4 shadow-md border-b-2">
            <div className="text">
                <h1 className='text-3xl font-bold pb-3 flex justify-center'>Login</h1>
            </div>
            <div className="input flex flex-col space-y-4">
                <input className='text-md rounded-md border-gray-300 outline-none py-1 px-2 border-2 placeholder-slate-700 hover:border-2 hover:border-black ' type="text" placeholder='Enter your Email' />
                <input className='text-md rounded-md border-gray-300 outline-none py-1 px-2 border-2 placeholder-slate-700 hover:border-2 hover:border-black' type="text" placeholder='Enter your Password' />
            </div>
            <div className="button my-2 pt-2">
                <button className='bg-[hsl(217,41%,52%)] w-full border-2 hover:border-black  rounded-md text-white text-xl font-semibold py-1'>Login</button>
                <h2 className=' flex justify-center my-1'>or</h2>
                <button className='bg-[hsl(217,41%,52%)] w-full border-2 hover:border-black rounded-md text-white text-xl font-semibold py-1'> <Link to={'/signup'}>Signup</Link></button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
