import React from 'react';
import { func, string } from 'prop-types';

const Input = props => {
  const { value, handleChange } = props
  return(
    <input type="text" value={ value } onChange={ handleChange }/>
  )
}

Input.propTypes = {
  value: string,
  handleChange: func
}

export default Input;