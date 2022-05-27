// side nav
// home button 
// profile button
// if modal for login/signUp logOut need button
// add event
import React from 'react';
import url from '../../pages/Login';
import url1 from '../../pages/Signup';

function Nav () {
    return (
            <div>
                <nav>
                    
                        <a href={url}>Log In</a>
                        <a href={url1}>Sign Up</a>
                        
                   
                </nav>
            </div>
    );
};


export default Nav;

