import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import SearchResults from './searchresults'

export class Search extends Component {
    constructor(props)  {
      super(props);
      this.state= {
        zipCode: "",
        within: 2,
        // searchTerm:""
      }
      this.onSubmit = this.onSubmit.bind(this)
      this.zipCode = this.zipCode.bind(this)
      this.within = this.within.bind(this)
    }
    zipCode(event) {
      this.setState({zipCode: event.target.value})
    }
    within(event) {
      this.setState({within: event.target.value})
    }
    onSubmit(event) {
      event.preventDefault()
      this.props.dispatch(actions.fetchListingsByZip(this.state.zipCode,this.state.within))
    }
    // searchTerm(event) {
    //   this.setState({searchTerm: event.target.value})
    // }

    render() {
        console.log(this.state)
        return (
            <div className='search-container'>
              <div className='home-image-container col-12'>
              <div className='motto'>
                <p className='search-titles one-title'>Hire Local, Work Local</p>
                <p className='search-titles'>Helping local small businesses find great employees</p>
                <form onSubmit={this.onSubmit}>
                <div>
                <input className='main-search-input' type='text' placeholder='Search Jobs'></input>
                <input className='main-search-input' onChange={this.zipCode} type='text' placeholder='Enter Location'></input>
                <select onChange={this.within} className='main-search-input'>
                    <option value={2}>Within 2 miles</option>
                    <option value={5}>Within 5 miles</option>
                    <option value={10}>Within 10 miles</option>
                    <option value={25}>Within 25 miles</option>
                    <option value={50}>Within 50 miles</option>
                    <option value={1000}>Within Any miles</option>
                </select>
                </div>
                <button className='main-search-button' type='submit'>SEARCH</button>
                </form>
              </div>
              </div>
              <SearchResults />
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
    listings: state.listings
})


export default connect(mapStateToProps)(Search);
