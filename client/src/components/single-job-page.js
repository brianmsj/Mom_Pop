import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';


export class SingleJobPage extends Component {
    constructor(props)  {
      super(props);
      this.state= {
      }
    }
    componentDidMount() {
      const {id} = this.props.match.params;
      this.props.dispatch(actions.fetchListing(id));
    }

    render() {
        return (
            <div className='row'>
             Job Page
            </div>
        );
     }
}
const mapStateToProps = ({listings}, ownProps) => ({
   listings: listings[ownProps.match.params.id]
})


export default connect(mapStateToProps)(SingleJobPage);
