import React from 'react'

const ThreadLineFactory = (props) => {
  
    let elements = []

    for (let i = 0; i < props.n; i++) {
        let isRoot = props.n-1 === i ? 'root-line' : ''

        elements.push(<props.element className={isRoot}/>)
    }

    return <>{elements}</>
}

export default ThreadLineFactory
