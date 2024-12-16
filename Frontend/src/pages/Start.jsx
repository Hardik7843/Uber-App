import React from 'react'
import {Link} from 'react-router-dom'
function Start() {
  return (
    <div>
        <div className='h-screen pt-5 flex justify-between flex-col w-full bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png)]'>
            <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start

