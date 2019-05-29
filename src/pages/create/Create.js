import React from 'react';
import { connect } from 'react-redux';
import { handleChange, handleSubmit } from '../../redux/actions/formActions';
import Form from'../../components/form/Form';
import Input from '../../components/input/Input';
import './create.css';

const Create = props => {

  const { handleSubmit, handleChange, body, emptyObj, validation } = props;

  console.log(validation)

  const title = !emptyObj ? body.title : ''; 
  const location = !emptyObj ? body.location : '';
  const fields = !emptyObj ? [body.title, body.location] : [];
  
  return(
    <div className="create-main-container">

      <Form payload={ body } fields={ fields } handleSubmit={ handleSubmit }>
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
    emptyObj: state.form.emptyObj,
    validation: state.form.validation
  }
}

export default connect(mapStateToProps, { handleChange, handleSubmit })(Create);