import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import Carousel from '../components/Carousel';
import MeetTeamComp from "../components/MeetTeam";

function MeetTeam () {
    return (
        <div>
             <div>
                <div className='text'>
                    <h1 className="text">Party Hearty</h1>
                </div>
                <Carousel/>
                <Nav/>
            </div>
            <MeetTeamComp/>
            <Footer/>
        </div>
    )
}

export default MeetTeam;