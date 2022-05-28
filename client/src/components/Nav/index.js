// side nav
// home button 
// profile button
// if modal for login/signUp logOut need button
// add event
import React from 'react';
// import url from '../../pages/Login';
// import url1 from '../../pages/Signup';

function Nav () {
    return (
            // <div>
            //     <nav>
                    
            //             <a href={url}>Log In</a>
            //             <a href={url1}>Sign Up</a>
                        
                   
            //     </nav>
            // </div>
            <div>
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-brands fa-accessible-icon"></i></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul>
        <li>
            Log In
        </li>
        <li>
            Sign Up
        </li>
        <li>
            Sign Out
        </li>
    </ul>
  </div>
</div>
            </div>
    );
};


export default Nav;

