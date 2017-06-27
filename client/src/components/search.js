import React, { Component } from 'react';





export class Search extends Component {

    render() {
        return (
            <div className='search-container'>
              <div className='home-image-container col-12'>
              <div className='motto'>
                <p className='search-titles one-title'>Hire Local, Work Local</p>
                <p className='search-titles'>Helping local small businesses find great employees</p>
                <div>
                <input className='main-search-input'type='text' placeholder='Search Jobs'></input>
                <input className='main-search-input'type='text' placeholder='Enter Location'></input>
                </div>
                <button className='main-search-button' type='submit'>SEARCH</button>
              </div>
              </div>
            </div>
        );
    }
}

export default Search;
