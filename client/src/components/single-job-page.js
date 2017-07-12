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
        const singleListing = this.props.singleListing
        if(singleListing === {}) {
          return <div>Loading...</div>
        }
        return (
            <div className='row'>
             <div className='col-8'>
              <h1>{singleListing.businessName}</h1>
              <h2>{singleListing.title}</h2>
              <p>{singleListing.pay}</p>
              <p>{singleListing.description}</p>
             </div>
            </div>
        );
     }
}
const mapStateToProps = ({listings}, ownProps) => ({
   listings: listings[ownProps.match.params.id],
   singleListing: listings.singleListing
})


export default connect(mapStateToProps)(SingleJobPage);
