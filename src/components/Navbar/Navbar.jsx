import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <div>
      <nav className="p-4 navbar navbar-expand-sm navbar-dark bg-transparent">
        <Link className="navbar-brand fw-bolder" to={'/'}>NOXE</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {/* Check For userData if registered or not */}
            {
              props.userData ? <>
                <li className="nav-item active">
                  <Link className="nav-link" to={'home'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'movies'}>Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'people'}>People</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'tvshow'}>TV Show</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'network'}>Network</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'about'}>About</Link>
                </li>
              </> : ''
            }

          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className='nav-item me-3 d-flex align-items-center'>
              <i class="fa-brands mx-2 fa-facebook ico"></i>
              <i class="fa-brands mx-2 fa-youtube ico"></i>
              <i class="fa-brands mx-2 fa-instagram ico"></i>
              <i class="fa-brands mx-2 fa-spotify ico"></i>
            </li>

            {
              props.userData ? <>
                <li className="nav-item">
                  <span onClick={props.logOut} className="nav-link">Logout</span>
                </li>
              </> : <>
                <li className="nav-item">
                  <Link className="nav-link" to={'register'}>Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'login'}>Login</Link>
                </li>
              </>
            }



          </ul>
        </div>
      </nav>
    </div>
  )
}
