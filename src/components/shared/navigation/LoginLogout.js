import React from 'react'
import { NavLink } from 'react-router-dom'

import "./LoginLogout.css"

const LoginLogout = () => {
  return (
    <div id='login-logout-wrapper'>
      <NavLink
        to="/login"
        className="nav-link__item"
      >
        Log in
      </NavLink>
    </div>
  )
}

export default LoginLogout