import React from 'react'

const RepeatElements = (props) => {
  
    let elements = []

    for (let i = 0; i < props.n; i++) {
        elements.push(<props.element />)
    }

    return <>{elements}</>
}

export default RepeatElements
