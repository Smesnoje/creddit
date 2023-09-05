import React from 'react'
import { useParams } from 'react-router-dom'

import ThreadPost from '../components/post/ThreadPost'
import { Left, Center, Right } from '../components/shared/Layout'

import './Post.css'


const Post = (props) => {
  const passedPostId = useParams().postId

  return (
    <>
      <Left>
      </Left>
      <Center>
        <ThreadPost id={passedPostId}/>
      </Center>
      <Right></Right>
    </>
  )
}

export default Post