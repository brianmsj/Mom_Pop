import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileForm from './profile-form'
import {Field, reduxForm} from 'redux-form'




export class Profile extends Component {

    render() {
        return (
            <div className='profile-container'>
              <ProfileForm />
            </div>
        );
    }
}

export default Profile
