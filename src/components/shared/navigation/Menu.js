import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Menu.css"

const Menu = () => {
  return (
    <div id='main-menu'>
      <NavLink
        to="/"
        className="nav-link__item"
      >
        Home
      </NavLink>

      <NavLink
        to="/newthread"
        className="nav-link__item"
      >
        Create Thread
      </NavLink>

      <NavLink
        to="/u/retard_autobus"
        className="nav-link__item"
      >
        Profile
      </NavLink>
    </div>
  )
}

export default Menu