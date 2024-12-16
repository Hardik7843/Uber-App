import { useState, useEffect, useContext } from 'react'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import Start from './pages/Start.jsx'
import Home from './pages/Home.jsx'
import CaptainHome from './pages/CaptainHome.jsx'

import {Routes , Route} from 'react-router-dom'
import UserProtectWrapper from './pages/UserProtectWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'
function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>} 
        />

        <Route path='/user-logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>} 
        />

        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />

        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>} 
        />

        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />

        <Route path='/captain-logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>}
        />
      </Routes>
    </>
  )
}

export default App
