import React from 'react';
// import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';

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
            <Carousel></Carousel>
            <Nav></Nav>
            <div className='text'>
                <h2>Plan your next event with us ...</h2>
                </div>
            <div className='homestep'>
                <div class="card col-9">
                    <div class="card-body">
                    <i class="fa-solid fa-list-check"></i>   Plan your next birthday, graduation or any CELEBRATION!
                    </div>
                </div>
                <div class="card col-9">
                    <div class="card-body">
                    <i class="fa-solid fa-comment-dollar"></i>  Create a guestlist , add a location, even add a fee for your event!
                    </div>
                </div>
                <div class="card col-9">
                    <div class="card-body">
                    <i class="fa-solid fa-rss"></i>  Post your event publicly or privately.. and keep track of your RSVPS !
                    </div>
                </div>
                </div>

            </div>
       

    );
};

export default Home;