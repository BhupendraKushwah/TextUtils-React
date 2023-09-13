import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'bg-dark' : 'bg-body-tertiary'}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode === 'dark' ? 'white' : 'dark'}`} href="/">{props.title}</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class={`nav-a ${props.mode==='dark'?'text-white':'text-dark'}`} aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class={`nav-a ${props.mode==='dark'?'text-white':'text-dark'}`} aria-current="page" href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="left-nav" >
            <div className="form-check form-switch">
              <input className="form-check-input " type="checkbox" role="button" id="flexSwitchCheckDefault" onClick={props.ToggleMode} />
              <label className={`form-check-label text-${props.mode === 'dark' ? 'white' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
