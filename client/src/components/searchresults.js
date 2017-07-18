import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JobFilter from './job-filter';

export class SearchResults extends Component {
    constructor(props)  {
      super(props);
      this.state= {
      }
    }

    render() {
       let filter;
       if(this.props.listings.listingsByZip.length > 0) {
          filter = <JobFilter />
       }

        const listing = this.props.listings.listingsByZip.map((item,i)=> {
          return (
            <Link to={`/singlepost/${item._id}`}>
            <div className='job-post-container col-3'key={i}>
              <p>{item.businessName}</p>
              <p>Position: {item.title}</p>
              <p>Hourly Pay: ${item.pay}/hour</p>
              <p>Duties: {item.description}</p>
            </div>
            </Link>
          )
        })
        return (
            <div className='row'>
             {filter}
             {listing}
            </div>
        );
     }
}
const mapStateToProps = (state, props) => ({
   listings: state.listings
})


export default connect(mapStateToProps)(SearchResults);
