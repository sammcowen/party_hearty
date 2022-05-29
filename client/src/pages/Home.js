import React from 'react';
// import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Plan from '../assets/plan.jpg';
import Fee from '../assets/fee.jpg';
import Invite from '../assets/invite.jpg';


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
            <Carousel />
            <Nav />
            <div className='text'>
                <h2>Plan your next event with us ...</h2>
            </div>
            <div className='homestep'>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Plan} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">

                                <p class="card-text">Plan you next birthday, graduation or any CELEBRATION with us!</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Fee} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">

                                <p class="card-text">Create a guestlist , add a location .. even add a FEE for your event!</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Invite} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">

                                <p class="card-text">Post your event publicly or privately.. and keep track of your RSVPS !!</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default Home;