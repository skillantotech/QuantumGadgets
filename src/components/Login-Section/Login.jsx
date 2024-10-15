import React from 'react'
import LoginImage from '../../assets/Login-Section/MobileLogin.png'

export default function Login() {
  return (
    <div className='parent w-[70%] h-[80vh] my-24 shadow-lg mx-auto flex'>
        <div className='left  w-full md:w-1/2 lg:w-1/2  md:px-10 lg:px-12 flex  justify-center items-center'>
        <div className='w-full '>
            <h3 className='text-2xl font-bold text-center mb-6'>Login</h3>
            <form className=''>
                <div className='mb-2'>
                    <div className=''><label className='label'>Email</label></div>
                    <input type='text' placeholder='Enter email' className='w-full py-2 px-1 '/>

                </div>
                <div className='mb-2 lg:mb-10'>
                    <div><label className='label'>Password</label></div>
                    <input type='text' placeholder='Enter email' className='w-full py-2 px-1 '/>

                </div>
                <button className='bg-[#1F2937] text-white w-full py-2 '>Login</button>
                <p className='text-center text-sm mb-4'>Don't have an account?<span className='font-semibold text-[#3B82F6]'> Signup</span></p>
                <div className="divider">Or</div>
                <button className='bg-[#1F2937] text-white w-full py-2 '>Login with Google</button>
            </form>
            </div>
        </div>
        <div className='right hidden  md:flex md:w-1/2 lg:w-1/2 bg-[#1F2937]   justify-center items-center'><img src={LoginImage} className='md:w-44 lg:w-64' /></div>
      
    </div>
  )
}
