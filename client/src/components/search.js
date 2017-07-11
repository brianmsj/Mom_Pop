import React, { Component } from 'react';





export class Search extends Component {
    constructor()  {
      super();
      this.state= {
        zipCode: "",
        searchTerm:""
      }
      this.searchTerm = this.searchTerm.bind(this)
      this.zipCode = this.zipCode.bind(this)
    }
    zipCode(event) {
      this.setState({zipCode: event.target.value
      })
    }
    searchTerm(event) {
      this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div className='search-container'>
              <div className='home-image-container col-12'>
              <div className='motto'>
                <p className='search-titles one-title'>Hire Local, Work Local</p>
                <p className='search-titles'>Helping local small businesses find great employees</p>
                <div>
                <input className='main-search-input' onChange={this.searchTerm}type='text' placeholder='Search Jobs'></input>
                <input className='main-search-input' onChange={this.zipCode}type='text' placeholder='Enter Location'></input>
                </div>
                <button className='main-search-button' type='submit'>SEARCH</button>
              </div>
              </div>
            </div>
        );
    }
}

export default Search;
