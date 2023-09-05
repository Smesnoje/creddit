import React from 'react'

export const Left = (props) => {
  return (
    <div className='layout-left'>{props.children}</div>
  )
}

export const Center = (props) => {
  return (
    <div className='layout-center'>{props.children}</div>
  )
}

export const Right = (props) => {
  return (
    <div className='layout-right'>{props.children}</div>
  )
}