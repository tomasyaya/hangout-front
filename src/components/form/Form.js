import React from 'react';
import { func, object } from 'prop-types';
import './form.css';

const Form = props => {
  const { children, handleSubmit, payload, fields } = props;

  return(
    <form className="form" onSubmit={ (e) => handleSubmit(e, payload, fields)}>
      { children }
    </form>
  ) 
}

Form.propTypes = {
  handleSubmit: func,
  payload: object
}

export default Form;