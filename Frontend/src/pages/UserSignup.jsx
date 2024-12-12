import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function UserSignup()
{
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  // const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();

    setUserData({
      fullName : {
        firstName : firstName,
        lastName : lastName
      },
      email: email,
      password: password
    })

    // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    // if (response.status === 200) {
    //   const data = response.data
    //   setUser(data.user)
    //   localStorage.setItem('token', data.token)
    //   navigate('/home')
    // }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <form onSubmit={(e) =>
        {
          submitHandler(e)
        }}
        >
          <h3 className=' w-1/2  font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <h3 className='font-medium mb-2'>What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border-collapse w-full text-lg placeholder:text-base'
            required
            placeholder='email@example.com'
          />
          <h3 className='font-medium mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) =>
            {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
          />
          <button
            className='bg-[#111] text-white mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign up</button>
        </form>
        <p className='text-center'>Already Registered? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup
