import React from 'react';
// import Jumbotron from '../components/Jumbotron';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventUpdateForm from '../components/EventUpdateForm';


const EventUpdatePage = () => {
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
                How would you like to update your event?
            </h2>
            </div>
            <EventUpdateForm />
            <Footer/>
        </div>
      
    );
};

export default EventUpdatePage;

