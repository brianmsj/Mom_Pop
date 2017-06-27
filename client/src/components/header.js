import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';




export class Header extends Component {

    render() {
        return (
            <div className='header-container'>
              <div className='main-title'>
              <h1>Mom and Pop</h1>
              </div>
              <div className='style-line'></div>
              <nav className='main-nav'>
                <li className='head-nav'>Browse Jobs</li>
                <Link to={'/profile'}><li className='head-nav'>Post a Candidate Profile</li></Link>
                <li className='head-nav'>Resources</li>
               </nav>
            </div>
        );
    }
}

export default Header
