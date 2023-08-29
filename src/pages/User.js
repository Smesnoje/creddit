import React from 'react'

import './User.css'
import { useParams } from 'react-router-dom';

const User = (props) => {

  const passedUsername = useParams().username;
  

  return (
    <div>{passedUsername}</div>
  )
}

export default User