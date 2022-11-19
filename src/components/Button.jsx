import React from 'react'

const Button = ({objStyleBtn, handleClick}) => {
  return (
    <button style={objStyleBtn} className='card__btn' onClick={handleClick}> &gt;</button>
  )
}

export default Button