import React from 'react'

import Card from '../components/shared/elements/Card'

import './NotFound.css'


const NotFound = (props) => {
  return (
    <div className='not-found-container'>
        <Card className="circle-404">
            <h1 className='circle-404-text'>Sorry, cannot find that page.</h1>
        </Card>
    </div>
  )
}

export default NotFound