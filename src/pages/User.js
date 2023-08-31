import React from 'react'
import { useParams } from 'react-router-dom';

import Card from '../components/shared/elements/Card';

import './User.css'

const User = (props) => {

  const passedUsername = useParams().username;


  return (

    <div className='user-container'>
      <img className='user-image' src="https://c.cdnmp.net/241860914/p/l/5/bullyland-patuljak-uca-snezana-i-7-patuljaka-12476-c~1073075.jpg" alt="patuljak"></img>
      <div className='user-name'>{passedUsername}</div>
      <div className='user-bio'>
        <Card>
          Ja sam mali patuljak zarobljen u zvucniku...
        </Card>
      </div>
    </div>
  )
}

export default User