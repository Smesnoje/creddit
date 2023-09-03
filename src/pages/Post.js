import React from 'react'
import { useParams } from 'react-router-dom'

import ThreadPost from '../components/post/ThreadPost'

import './Post.css'


const Post = (props) => {
  const passedPostId = useParams().postId

  return (
    <ThreadPost id={passedPostId}/>
  )
}

export default Post