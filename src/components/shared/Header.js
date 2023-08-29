import React from 'react'

import Menu from './navigation/Menu'
import Input from './elements/Input'

import './Header.css'

const Header = () => {
  return (
    <div>
      <Menu />
      <Input name='search' type='textarea'/>
    </div>
  )
}
export default Header;