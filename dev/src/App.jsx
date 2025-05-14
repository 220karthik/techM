
import Frontpage from './frontpage.jsx'
import LoginPage from './Login.jsx'
import SignUp from './signup.jsx'
import Admin from './admindash.jsx'
import JobPortal from './Jobseekerdashboard.jsx'
import { BrowserRouter,replace,Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Frontpage />}/>
      <Route path='/Login' element={<LoginPage />}/>
      <Route path='/Signup' element={<SignUp />}/>
      <Route path='/Jobseeker' element={<JobPortal />}/>
      <Route path='/Admindash' element={<Admin />}/>
    </Routes>
   
    </>
  )
}

export default App
