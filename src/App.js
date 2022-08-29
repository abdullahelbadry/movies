import './App.css';
import {Route, Routes} from 'react-router-dom'
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

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Home' element={<Home/>} />
          <Route path='About' element={<About/>} />
          <Route path='Movies' element={<Movies/>} />
          <Route path='Network' element={<Network/>} />
          <Route path='People' element={<People/>} />
          <Route path='TVShow' element={<TVShow/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='Logout' element={<Logout/>} />
          <Route path='Register' element={<Register/>} />
          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
