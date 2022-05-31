import React from 'react';
import {Link} from 'react-router-dom';


function Footer () {


    return (
        <div>
            <div className="sticky-bottom footer">
                <Link to='/contributors/team'> Meet the Team </Link>
            </div>
        </div>
    );
};

export default Footer; 