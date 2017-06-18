import React, { Component } from 'react';
import * as Cookies from 'js-cookie';


export class LoginPage extends Component {

    render() {
        return (
            <a href={'/api/auth/google'}>Login with Google</a>
        );
    }
}

export default LoginPage;
