import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AXIOS } from '../lib/axios.js'
import { CaptainDataContext } from '../context/CaptainContext.jsx'

function CaptainLogin() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { captain, setCaptain } = useContext(CaptainDataContext)
  
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password : password
    }

    const response = await AXIOS.post(`/captains/login`, captainData)
    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
        >
          <h3 className='font-medium mb-2'>What's your email?</h3>
          <input 
            type="email" 
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-collapse w-full text-lg placeholder:text-base'
            required 
            placeholder='email@example.com' 
            />
          <h3 className='font-medium mb-2'>Enter Password</h3>
          <input 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='password' 
            />
          <button
            type='submit'
            className='bg-[#111] text-white mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>
        </form>
        <p className='text-center'>Join our fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>

      <div>
        <Link
          to={'/login'}
          className='bg-[#469659] flex items-center justify-center text-white mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Passanger</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
