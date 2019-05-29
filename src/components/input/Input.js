import React from 'react';
import { func, string } from 'prop-types';
import './input.css';

const Input = props => {
  const { value, handleChange, name } = props
  return(
    <input className="input" type="text" name={ name } value={ value } onChange={ handleChange }/>
  )
}

Input.propTypes = {
  value: string,
  handleChange: func,
  name: string
}

export default Input;