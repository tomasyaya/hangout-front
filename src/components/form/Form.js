import React from 'react';
import { func } from 'prop-types';

const Form = props => {
  const { children, handleSubmit } = props;
  return(
    <form onSubmit={handleSubmit}>
      { children }
    </form>
  ) 
}

Form.propTypes = {
  handleSubmit: func
}

export default Form;