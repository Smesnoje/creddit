import React from 'react'

import './ProfilePicture.css'

const ProfilePicture = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={`profile-picture ${props.className}`} />
  )
}

export default ProfilePicture
