import React from 'react'

function Item({ ...props }) {
  return (
    <>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
    </>
  )
}

export default Item