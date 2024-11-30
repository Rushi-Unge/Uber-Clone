
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import CaptainSignup from './pages/CaptainSignup'
import UserLogout from './pages/UserLogOut'

import Captainlogin from './pages/CaptainLogin.jsx';
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'

const App = () => {

  return (
    <div>
    <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } /> */}
        <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
   </Routes>
    </div>
  )
}


export default App
