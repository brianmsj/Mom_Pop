import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'




export class Profile extends Component {

    render() {
        return (
            <div className='profile-container'>
              This is the Profile
            </div>
        );
    }
}

export default Profile
