import React from 'react';
import { connect } from 'react-redux';
import { handleChange, handleSubmit } from '../../redux/actions/formActions';
import Form from'../../components/form/Form';
import Input from '../../components/input/Input';
import './create.css';

const Create = props => {

  const { handleSubmit, handleChange, body, emptyObj } = props;

  const title = !emptyObj ? body.title : ''; 
  const location = !emptyObj ? body.location : '';
  
  return(
    <div className="create-main-container">

      <Form payload={ body } handleSubmit={ handleSubmit }>
        <Input name="title" value={ title } handleChange={ handleChange }/>
        <Input name="location" value={ location } handleChange={ handleChange }/>
        <button type="submit">
          Create
        </button>
      </Form>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    body: state.form.body,
    emptyObj: state.form.emptyObj
  }
}

export default connect(mapStateToProps, { handleChange, handleSubmit })(Create);