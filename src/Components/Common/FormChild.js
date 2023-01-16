import React from 'react'

const Child = (props) => {
  return (
    <div style={{color : "red"}}>{props.children}</div>
  )
}

export default Child