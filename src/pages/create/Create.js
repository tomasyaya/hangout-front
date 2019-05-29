import React from 'react';
import { connect } from 'react-redux';
import { handleChange, handleSubmit } from '../../redux/actions/formActions';
import { createGuide } from '../../redux/actions/guideActions';
import Form from'../../components/form/Form';
import Input from '../../components/input/Input';
import DisplayGuides from '../../components/display-guides/DisplayGuides';
import './create.css';

const Create = props => {

  const {  handleChange, body, emptyObj, validation, createGuide, guides } = props;

  const title = !emptyObj ? body.title : ''; 
  const location = !emptyObj ? body.location : '';
  const fields = !emptyObj ? [body.title || '', body.location || ''] : ['',''];
  const validationMessage = validation ? <p>{ "Please complete all fields" }</p> : null;

  return(
    <div className="create-main-container">
      { validationMessage }
      <Form 
        payload={ body } 
        fields={ fields } 
        handleSubmit={ createGuide }
        >
        <Input 
          name="title" 
          value={ title } 
          handleChange={ handleChange }
          />
        <Input 
          name="location" 
          value={ location } 
          handleChange={ handleChange }
          />
        <button type="submit">
          Create
        </button>
      </Form>
      <DisplayGuides guides={guides} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    body: state.form.body,
    emptyObj: state.form.emptyObj,
    validation: state.form.validation,
    guides: state.guide.guides
  }
}

export default connect(mapStateToProps, { handleChange, handleSubmit, createGuide })(Create);