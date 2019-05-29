import React from 'react';
import { func } from 'prop-types';
import './form.css';

const Form = props => {
  const { children, handleSubmit } = props;
  return(
    <form className="form" onSubmit={handleSubmit}>
      { children }
    </form>
  ) 
}

Form.propTypes = {
  handleSubmit: func
}

export default Form;