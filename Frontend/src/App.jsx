import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import CaptainSignup from './pages/CaptainSignup';
import UserLogout from './pages/UserLogOut';

import CaptainLogin from './pages/CaptainLogin.jsx';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import CaptainProtectWrapper from './pages/CaptainProtectedWrapper.jsx';
import CaptainLogout from './pages/CaptainLogOut.jsx';
import CaptainHome from './pages/CaptainHome'; // Import CaptainHome

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captains/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
