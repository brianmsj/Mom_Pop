import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

export class SingleJobPage extends Component {
    constructor(props)  {
      super(props);
      this.state= {
      }
    }

    render() {
        return (
            <div className='row'>
             Job Page
            </div>
        );
     }
}
const mapStateToProps = (state, props) => ({
   listings: state.listings
})


export default connect(mapStateToProps)(SingleJobPage);
