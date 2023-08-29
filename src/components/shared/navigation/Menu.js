import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Menu.css"

const Menu = () => {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "navlink-active" : "navlink-default"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => {
          return isActive ? "navlink-active" : "navlink-default"
        }}
      >
        Profile
      </NavLink>
    </div>
  )
}

export default Menu