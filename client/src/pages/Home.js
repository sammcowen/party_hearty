import React from 'react';
// import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import Carousel from '../components/Carousel';
// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
    return (
        <div>
            <div className='text'>
                <h1 className="text">Party Hearty</h1>
            </div>
            <Carousel/>
            <Nav/>
            <div className='text'>
                <h2>Plan your next event with us ...</h2>
                </div>
            <div className='homestep'>
                <div className="card col-9">
                    <div className="card-body">
                    <i className="fa-solid fa-list-check"></i>   Plan your next birthday, graduation or any CELEBRATION!
                    </div>
                </div>
                <div className="card col-9">
                    <div className="card-body">
                    <i className="fa-solid fa-comment-dollar"></i>  Create a guestlist , add a location, even add a fee for your event!
                    </div>
                </div>
                <div className="card col-9">
                    <div className="card-body">
                    <i className="fa-solid fa-rss"></i>  Post your event publicly or privately.. and keep track of your RSVPS !
                    </div>
                </div>
                </div>
<Footer/>
            </div>
       

    );
};

export default Home;