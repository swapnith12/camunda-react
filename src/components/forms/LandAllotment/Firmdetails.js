import React from 'react'
import { Field, reduxForm} from 'redux-form'
import { Form, Button} from 'semantic-ui-react'
import { InputField} from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'


const SimpleForm = props => {
  const { handleSubmit } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Field name='Name' component={InputField} label='Name' placeholder='Name'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
      <Field name='Contact' component={InputField} label='Contact' placeholder='Contact'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]} />
 
      <Form.Field control={Button} primary type='submit'>Submit!</Form.Field>
    </Form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
