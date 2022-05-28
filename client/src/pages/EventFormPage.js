import React from 'react';
// import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import EventForm from '../components/EventForm';
const EventFormPage = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Nav></Nav>
            <h2>
                Fill out the form below to create your next Party Hearty Event!
            </h2>
            <EventForm></EventForm>
            </div>
      
    );
};

export default EventFormPage;

