import React from 'react'
import { Field, reduxForm} from 'redux-form'
import { Form, Button} from 'semantic-ui-react'
import { InputField} from 'react-semantic-redux-form'
import * as Validation from '../../../constants/ValidationOptions'

const DropdownField = ({ input, label, options }) => (<Form.Field><label>{label}</label><Form.Dropdown
      fluid
      selection
      options={options}
      value={input.value}
      onChange={(e, { value }) => input.onChange(value)}
    /></Form.Field>
);

const SimpleForm = props => {
  const { handleSubmit } = props

  const options=[
    {key:'1',value:'Male',text:'Male'},
    {key:'2',value:'Female',text:'Female'}
  ]

  return (
    <Form onSubmit={handleSubmit}>
      <Field name='firstName' component={InputField} label='First Name' placeholder='First Name'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]}/>
      <Field name='lastName' component={InputField} label='Last Name' placeholder='Last Name'
        validate={[ Validation.required, Validation.maxLength15, Validation.minLength2 ]} />
      <Field name='email' component={InputField} label='E-Mail' placeholder='E-Mail'
        validate={[ Validation.required, Validation.minLength2, Validation.email ]}/>
      <Field
        name="Gender"
        label="Gender"
        component={DropdownField}
        options={options}
      />

      <Form.Field control={Button} primary type='submit'>Submit!</Form.Field>
    </Form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
