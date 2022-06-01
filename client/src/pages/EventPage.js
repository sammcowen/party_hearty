import React  from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_EVENT } from '../utils/queries';
import Auth from '../utils/auth'


// import { EventName } from '../components/EventName';
// import { EventDiscription } from "../components/EventDiscription";
// import { ParticipantList } from '../components/ParticipantList';
import { Map } from '../components/Map';
// import { Details } from '../components/Details';
import Header from '../components/Header';
import SendRsvp from '../components/SendRsvp';

import '../index.css';
import Footer from '../components/Footer';




const EventPage = () => {

    const { id: eventId } = useParams();
console.log(eventId);
    const { loading, data } = useQuery(QUERY_EVENT, {
        variables: { id: eventId },
     });
  
    const event = data?.event || {};    
// {dateFormat(event.date)}
    console.log(event);

    const eventDate = (timestamp) => new Date(timestamp).toUTCString()

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(event)
    return (
        <>
            <Header/>
            <div>
                <h1 className='center'> {event.name} </h1>
                <br/>
                <div className='container'>
                    <div className='left'>
                    <div className='guest-list'>
                  <h2>Guest List</h2>
                       {/* <ParticpantList /> */}
                {/* 
                {state.guests.length ? (
                    <div>
                        {filterGuest().map((User))}
                    </div>
                )}
                */}
                    </div>
                    </div>
                    <div className='right'>
                        <div className='container justify-between'>
                        <div className="detail-box">
                            <div>Event hosted by: <span> {event.host} </span> </div>
                            <div>Event hosted on: <span> {eventDate(parseInt(event.date))} </span>  </div>
                            <div>Event hosted at: <span>{event.location}</span> </div>
                            <div>Event fee: $<span>{event.fee}</span></div>
                        </div>
                            <Map className='map' location={event.location}/>
                            <br/>
                            {Auth.loggedIn && (<SendRsvp eventId={event._id}/>)}

                        </div>

                        <br/>
                        <div>
                            <div className='description fix'>
                               <p> Description {event.description} </p>
                            </div>
                        </div>      
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    );
};

export default EventPage;