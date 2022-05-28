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
        </div>
    );
};

export default Home;