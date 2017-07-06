import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'




export class profileForm extends Component {

    const {handleSubmit, pristine, reset, submitting} = this.props
    render() {
        return (
            <form onSubmit={handleSubmit()}>
              <div>
                <label>First Name</label>
              </div>
                <Field
                  name='firstName'
                  component='input'
                  type='text'
                  placeholder="First Name"
                  />
              </div>
            </form>
        );
    }
}

export default Profile
