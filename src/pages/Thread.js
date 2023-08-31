import React from 'react'
import { useParams } from 'react-router-dom'

import ThreadFeed from '../components/ThreadFeed'

import './Thread.css'

const Thread = () => {
  
  const passedThread = useParams().thread

  return (
    <div>
      <ThreadFeed thread={passedThread}/>
    </div>
  )
}

export default Thread