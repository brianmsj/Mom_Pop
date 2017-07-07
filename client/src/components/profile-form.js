import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm, getFormValues} from 'redux-form';




export class ProfileForm extends Component {


    render() {
       const { handleSubmit, pristine, reset, submitting} = this.props
        return (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
              </div>
              <div>
                <Field
                  name='firstName'
                  component='input'
                  type='text'
                  placeholder="First Name"
                  />
                <div>
                 <label>Last Name</label>
                </div>
                <Field
                  name='lastName'
                  component='input'
                  type='text'
                  placeholder="Last Name"
                  />
                <div>
                 <label>e-mail</label>
                </div>
                <Field
                  name='email'
                  component='input'
                  type='email'
                  placeholder="Email"
                 />
                 <div>
                  <label>Date Available</label>
                </div>
                 <Field
                   name='dateAvailable'
                   component='input'
                   type='date'
                   placeholder="Email"
                  />
                <div>
                  <label>Phone Number</label>
                </div>
                <Field
                  name='phoneNumber'
                  component='input'
                  type='number'
                  label='Phone number'
                />
                <div>
                  <label>Zip Code</label>
                </div>
                <Field
                  name='zipCode'
                  component='input'
                  type='number'
                  label='Enter Zip Code'
                />
                <div>
                 <label>Describe Past Experience / Past Employment</label>
               </div>
                <Field
                  name='resume'
                  component='input'
                  type='textarea'
                  placeholder="Experience"
                 />
                 <div>
                  <label>If No Experience, List Relevant Skills</label>
                </div>
                 <Field
                   name='skill'
                   component='input'
                   type='textarea'
                   placeholder="List relevant skills (ie..communication)"
                  />
              </div>
            </form>
        );
    }
}

function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Item required';
  }
  return errors;
}

export default reduxForm({
  form: 'profileForm',
  validate // a unique identifier for this form
})(ProfileForm)
