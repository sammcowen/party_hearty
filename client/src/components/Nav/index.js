// side nav
// home button 
// profile button
// if modal for login/signUp logOut need button
// add event
import React from 'react';
import { Link } from 'react-router-dom';
// import Login from '../Login';
// import Signup from '../SignUp';

function Nav () {
    return (
      <>
        
        
              <button className=" rando btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Nav</button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <ul className="flex-row">
              <li className="">
                <Link to="/signup">
                  Signup
                </Link>
              </li>
              <li className="">
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
            </div>
          </div>
      </>
    );
};


export default Nav;

