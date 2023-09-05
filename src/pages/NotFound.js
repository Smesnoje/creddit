import React from 'react'

import Card from '../components/shared/elements/Card'
import { Left, Center, Right } from '../components/shared/Layout'


import './NotFound.css'


const NotFound = (props) => {
  return (
    <>
      <Left>
      </Left>
      <Center>
        <div className='not-found-container'>
            <Card className="circle-404">
                <h1 className='circle-404-text'>Sorry, cannot find that page.</h1>
            </Card>
        </div>
      </Center>
      <Right></Right>
    </>
  )
}

export default NotFound