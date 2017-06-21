import React, { Component } from 'react';
import SignUp from './signup-form';
import * as actions from '../actions/index';
import { connect } from 'react-redux';


export class LoginPage extends Component {
  constructor(props) {
       super(props)
       this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(event) {
    event.preventDefault();
    let userData = {
      email: this.userEmail.value,
      password: this.userPassword.value
    }
    this.props.dispatch(actions.checkUser(userData))

  }

     render() {
        return (
          <div>
            <a href={'/api/auth/google'}>Login with Google </a>
            <a href={'/api/auth/twitter'}> Login with Twitter</a>
            <form>
              <div>
                <label>Username:</label>
                <input ref={ref => this.userEmail = ref}
                       type="text" name="username"/>
              </div>
              <div>
                <label>Password:</label>
                <input type="password"
                       name="password"
                       ref={ref => this.userPassword = ref}
                       />
              </div>
              <div>
                <input onClick={this.onSubmit} type="submit" value="Log In"/>
              </div>
              </form>
              <SignUp />
           </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
  email: state.user.email
});
export default connect(mapStateToProps)(LoginPage);
