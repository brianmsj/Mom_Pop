// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {Field, reduxForm, getFormValues} from 'redux-form';
//
//
//
//
// export class ProfileForm extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       public_ids:[],
//       renderText: false
//     }
//   }
//
//   renderField({input, label, type, textarea, placeholder, meta: { touched, error } }) {
//   const textareaType = <textarea className="textarea" {...input} placeholder={placeholder} type={type} />;
//   const inputType = <input className="input" {...input} placeholder={placeholder} type={type} />;
//     return (
//     <div className="form-field">
//     <label className="form-label">{label}</label>
//     <div>
//       {textarea ? textareaType : inputType}
//       <div className="field-msg">
//         {touched ? error : ''}
//       </div>
//     </div>
//    </div>
//    );
//    }
//
//     render() {
//        const { handleSubmit, pristine, reset, submitting} = this.props
//         return (
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label>First Name</label>
//               </div>
//               <div>
//                 <Field
//                   name='firstName'
//                   component={this.renderField}
//                   type='text'
//
//                   placeholder="First Name"
//                   />
//                 <div>
//                  <label>Last Name</label>
//                 </div>
//                 <Field
//                   name='lastName'
//                   component={this.renderField}
//                   type='text'
//                   placeholder="Last Name"
//                   />
//                 <div>
//                  <label>e-mail</label>
//                 </div>
//                 <Field
//                   name='email'
//                   component={this.renderField}
//                   type='email'
//                   placeholder="Email"
//                  />
//                  <div>
//                   <label>Date Available</label>
//                 </div>
//
//                  <Field
//                    name='dateAvailable'
//                    component={this.renderField}
//                    type='date'
//                    placeholder="Email"
//                   />
//                 <div>
//                   <label>Phone Number</label>
//                 </div>
//                 <Field
//                   name='phoneNumber'
//                   component={this.renderField}
//                   type='number'
//                   placeholder='Phone number'
//                 />
//                 <div>
//                   <label>Zip Code</label>
//                 </div>
//                 <Field
//                   name='zipCode'
//                   component={this.renderField}
//                   type='number'
//                   placeholder='Enter Zip Code'
//                 />
//                 <div>
//                  <label>Describe Past Experience / Past Employment</label>
//                </div>
//                 <Field
//                   name='resume'
//                   component={this.renderField}
//                   type='text'
//                   textarea={true}
//                   placeholder="Experience"
//                  />
//                  <div>
//                   <label>If No Experience, List Relevant Skills</label>
//                 </div>
//                  <Field
//                    name='skill'
//                    component={this.renderField}
//                    type='text'
//                    textarea={true}
//                    placeholder="List relevant skills (ie..communication)"
//                   />
//               </div>
//             </form>
//         );
//     }
// }
//
// function validate(values) {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Item required';
//   }
//   return errors;
// }
//
// export default reduxForm({
//   form: 'profileForm',
//   validate // a unique identifier for this form
// })(ProfileForm)
