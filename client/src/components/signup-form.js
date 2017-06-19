import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';


export class SignUp extends Component {
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
     this.props.dispatch(actions.createUser(userData))

   }
   render() {
        return (
          <div>
            <form  method="post">
              <div>
                <label>email:</label>
                <input type="text"
                       name="username"
                       ref={ref => this.userEmail = ref}/>
              </div>
              <div>
                <label>password:</label>
                <input type="password"
                       name="password"
                       ref={ref => this.userPassword = ref}
                       />
              </div>
              <div>
                <input type="submit" value="SignUp" onClick={this.onSubmit}/>
              </div>
              </form>
           </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
  email: state.user.email
});
export default connect(mapStateToProps)(SignUp);
