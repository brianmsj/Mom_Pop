import React, { Component } from 'react';




export class Header extends Component {

    render() {
        return (
            <div className='header-container'>
              <div className='main-title'>
              <h1>Mom and Pop</h1>
              </div>
              <div className='motto'>
              <Image publicId="small_business_d7j6cb.jpg" >
              <h4>Helping local small business find great employees</h4>
              </div>
              <div className='style-line'></div>
              <nav className='main-nav'>
                <li className='head-nav'>Browse Jobs</li>
                <li className='head-nav'>Post a Candidate Profile</li>
                <li className='head-nav'>Resources</li>
               </nav>
            </div>
        );
    }
}

export default Header;
