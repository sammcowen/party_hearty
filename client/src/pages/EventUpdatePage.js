import React from 'react';
// import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import EventUpdateForm from '../components/EventUpdateForm';


const EventUpdatePage = () => {
    // const [events, updateEvent] =useState([]);

    // const addEvent = (eventInfo) => {
    //     updateEvent([...events, eventInfo]);
    // };
    // console.log(events)
    return (
        <div>
            <Carousel></Carousel>
            <Nav></Nav>
            <div className='text'>
            <h2>
                How would you like to update your event?
            </h2>
            </div>
            <EventUpdateForm />
            </div>
      
    );
};

export default EventUpdatePage;

