import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';


export class JobFilter extends Component {
    constructor(props)  {
      super(props);
      this.state= {
      }
    }

    render() {

        return (
            <div className='col-3'>
              This is the Job Filter
            </div>
        );
     }
}
const mapStateToProps = (state,props) => ({

})


export default connect(mapStateToProps)(JobFilter);
