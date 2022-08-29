import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="p-4 navbar navbar-expand-sm navbar-dark bg-transparent">
        <Link className="navbar-brand fw-bolder" to={'/'}>NOXE</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className='nav-item me-3 d-flex align-items-center'>
            <i class="fa-brands mx-2 fa-facebook"></i>
            <i class="fa-brands mx-2 fa-youtube"></i>
            <i class="fa-brands mx-2 fa-instagram"></i>
            <i class="fa-brands mx-2 fa-spotify"></i>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'register'}>Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'login'}>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
