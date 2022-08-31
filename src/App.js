import './App.css';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Movies from './components/Movies/Movies';
import Network from './components/Network/Network';
import People from './components/People/People';
import TVShow from './components/TVShow/TVShow';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import { useState, useEffect, Children } from 'react';
import jwtDecode from 'jwt-decode';


function App() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if(localStorage.getItem('userToken')){
      getUserData();
    }
  }, [])

  function getUserData(){
    let decodedToken = jwtDecode(localStorage.getItem('userToken'));
    setUserData(decodedToken);
  }

  useEffect(()=>{console.log(userData)}, [userData]);

  function logOut(){
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }

  function ProtectedRoute({children}){
    if(!localStorage.getItem('userToken')){
      return <Navigate to={'/login'}/>
    } else{
      return children;
    }
  }

  return (
    <div>
      <Navbar userData={userData} logOut={logOut} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Home' element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
          <Route path='About' element={<ProtectedRoute> <About/> </ProtectedRoute>} />
          <Route path='Movies' element={<ProtectedRoute> <Movies/> </ProtectedRoute>} />
          <Route path='Network' element={<ProtectedRoute> <Network/> </ProtectedRoute>} />
          <Route path='People' element={<ProtectedRoute> <People/> </ProtectedRoute>} />
          <Route path='TVShow' element={<ProtectedRoute> <TVShow/> </ProtectedRoute>} />
          <Route path='Login' element={<Login getUserData={getUserData}/>} />
          <Route path='Logout' element={<Logout/>} />
          <Route path='Register' element={<Register/>} />
          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
