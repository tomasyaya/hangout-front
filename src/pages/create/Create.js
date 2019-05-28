import React from 'react';
import Form from'../../components/form/Form';
import Input from '../../components/input/Input';

const Create = props => {
  return(
    <div>
      <Form>
        <Input />
        <Input />
        <button>
          Create
        </button>
      </Form>
    </div>
  )
}

export default Create;