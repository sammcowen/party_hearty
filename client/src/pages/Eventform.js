import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';

const Eventform = () => {
    return (
        <div>
            <Jumbotron></Jumbotron>
            <Nav></Nav>
            <form>
                <div>
                    <label for="eventName" >Event Name</label>
                    <input type="text" id="eventName" placeholder="Samm's Birthday"/>
                </div>
                <div >
                    <label for="eventdescription" >Event Description</label>
                    <textarea  id="eventDescription" rows="3"></textarea>
                </div>
                <div>
                    <label for="eventFee" >Event Fee</label>
                    <input type="text" id="eventFee" placeholder="150"/>
                </div>
                <div>
                    <label for="eventDate" >Event Date</label>
                    <input type="text" id="eventDate" placeholder="June 16"/>
                </div>
                <div>
                    <label for="eventLocation" >Event Location</label>
                    <input type="text" id="eventLocation" placeholder="My House"/>
                </div>
                <div>
                    <label for="eventGuests" >Event Date</label>
                    <input type="text" id="eventGuests" placeholder="Everyone!"/>
                </div>
            </form>
            <button>submit event</button>
        </div>
    );
};

export default Eventform;

