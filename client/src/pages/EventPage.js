import React  from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_EVENT } from '../utils/queries';

import { Map } from '../components/Map';

import Header from '../components/Header';
import SendRsvp from '../components/SendRsvp';

import '../index.css';
import Footer from '../components/Footer';
import { ParticipantList } from '../components/ParticipantList';




const EventPage = () => {

    const { id: eventId } = useParams();
console.log(eventId);
    const { loading, data } = useQuery(QUERY_EVENT, {
        variables: { id: eventId },
     });
  
    const event = data?.event || {};    

    console.log(event);

    const eventDate = (timestamp) => new Date(timestamp).toUTCString()

    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <>
            <Header/>
            <div>
                <h1 className='center'> {event.name} </h1>
                <br/>
                <div className='container'>
                    <div className='left'>
                        <ParticipantList guests={event.invitesRecieved}/>
                    </div>
                    <div className='right'>
                        <div className='container justify-between'>
                        <div className="detail-box">
                            <div>Event hosted by: <span>  {event.host} </span> </div>
                            <div>Event hosted on: <span> {eventDate(parseInt(event.date))} </span>  </div>
                            <div>Event hosted at: <span>{event.location}</span> </div>
                            <div>Event fee: $<span>{event.fee}</span></div>
                        </div>
                            <Map className='map' location={event.location}/>
                            <br/>
                            <SendRsvp eventId={event._id}/>

                        </div>

                        <br/>
                        <div>
                            <div className='description'>
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