import React from 'react'

const Button = (props) => {
  return (
     <button className = {props.className} style={props.style}>{props.name}</button>
  )
}

export default Button
