import React, { Component } from 'react';
import * as actions from '../actions/index';


export class SignUp extends Component {



    render() {
        return (
          <div>
            <form a method="post">
              <div>
                <label>email:</label>
                <input type="text" name="username"/>
              </div>
              <div>
                <label>password:</label>
                <input type="password" name="password"/>
              </div>
              <div>
                <input type="submit" value="SignUp"/>
              </div>
              </form>
           </div>
        );
    }
}

export default SignUp;
