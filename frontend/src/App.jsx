import './App.css'
import { Navigate,Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser} = useAuthContext();

  return (
    <>
    
       {/* <Login /> */}
       {/* <Signup /> */}
       {/* <Sidebar /> */}
    
       <Routes>
         <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/signup' element={authUser ?  <Navigate to='/' /> : <SignUp /> } />
        <Route path='/login' element={authUser ?  <Navigate to='/' /> : <Login /> } />
        
       </Routes>
       <Toaster />
    </>
  )
}

export default App
