import React from 'react'
import { useParams } from 'react-router-dom';

import UserFeed from '../components/UserFeed'
import Card from '../components/shared/elements/Card';
import { Left, Center, Right } from '../components/shared/Layout'

import './User.css'

const User = (props) => {

  const passedUsername = useParams().username;

  return (
        <>
            <Left>
            </Left>
            <Center>
              <div className='user-container'>
                <Card className='user-container-card'>
                <img className='user-image' src="https://c.cdnmp.net/241860914/p/l/5/bullyland-patuljak-uca-snezana-i-7-patuljaka-12476-c~1073075.jpg" alt="patuljak"></img>
                <div className='user-name'>{passedUsername}</div>
                <div className='user-bio'>
                  <Card>
                    Ja sam mali patuljak zarobljen u zvucniku...
                  </Card>
                </div>
                </Card>
                <UserFeed author={passedUsername} />
              </div>
            </Center>
            <Right></Right>
        </>
  )
}

export default User