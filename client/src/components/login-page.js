import React, { Component } from 'react';
import SignUp from './signup-form';


export class LoginPage extends Component {

    render() {
        return (
          <div>
            <a href={'/api/auth/google'}>Login with Google </a>
            <a href={'/api/auth/twitter'}> Login with Twitter</a>
            <form action="/login" method="post">
              <div>
                <label>Username:</label>
                <input type="text" name="username"/>
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password"/>
              </div>
              <div>
                <input type="submit" value="Log In"/>
              </div>
              </form>
              <SignUp />
           </div>
        );
    }
}

export default LoginPage;
