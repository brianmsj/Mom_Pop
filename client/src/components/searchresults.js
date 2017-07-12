import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

export class SearchResults extends Component {
    constructor(props)  {
      super(props);
      this.state= {
      }
    }

    render() {

        const listing = this.props.listings.listingsByZip.map((item,i)=> {
          return (
            <div key={i}>
              <p>{item.business}</p>
              <p>{item.title}</p>
              <p>{item.pay}</p>
              <p>{item.description}</p>
            </div>
          )
        })
        return (
            <div>
             {listing}
            </div>
        );
     }
}
const mapStateToProps = (state, props) => ({
   listings: state.listings
})


export default connect(mapStateToProps)(SearchResults);
