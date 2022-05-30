import React, {useState} from 'react';
// import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import EventForm from '../components/EventForm';

const EventFormPage = () => {
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
                Fill out the form below to get your next event started!
            </h2>
            </div>
            <EventForm />
            </div>
      
    );
};

export default EventFormPage;

