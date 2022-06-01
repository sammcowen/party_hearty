import React from "react";
import Footer from '../components/Footer';

// import Carousel from '../components/Carousel';
import MeetTeamComp from "../components/MeetTeam";
import Header from "../components/Header";

function MeetTeam () {
    return (
        <div>
             <Header/>
            <MeetTeamComp/>
            <Footer/>
        </div>
    )
}

export default MeetTeam;