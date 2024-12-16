import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserDataContext } from '../context/UserContext.jsx'
import axios from 'axios'
import { AXIOS } from '../lib/axios.js'

const UserLogin = () => {
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ userData, setUserData ] = useState({})
  const { user, setUser } = useContext(UserDataContext)

  // const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await AXIOS.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      // console.log(data)
      setUser(data.user)
      // console.log(document.cookie)
      localStorage.setItem('token', data.token)
      navigate('/home')
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
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <Link
          to={'/captain-login'}
          className='bg-[#edc173] flex items-center justify-center text-black mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
