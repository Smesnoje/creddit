import React from 'react'

import { Feed } from '../components/Feed'
import { Left, Center, Right } from '../components/shared/Layout'

import './Home.css'

const Home = () => {
  
  return (
    <>
      <Left>
      </Left>
      <Center>
        <Feed />
      </Center>
      <Right></Right>
    </>
  )
}

export default Home