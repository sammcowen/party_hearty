import React from 'react';
import Header from '../components/Header';
import EventForm from '../components/EventForm';
import Footer from '../components/Footer';

const EventFormPage = () => {
    // const [events, updateEvent] =useState([]);

    // const addEvent = (eventInfo) => {
    //     updateEvent([...events, eventInfo]);
    // };
    // console.log(events)
    return (
        <div>
            <Header/>
            <div className='text'>
            <h2>
                Fill out the form below to get your next event started!
            </h2>
            </div>
            <EventForm />
            <Footer/>
        </div>
      
    );
};

export default EventFormPage;

