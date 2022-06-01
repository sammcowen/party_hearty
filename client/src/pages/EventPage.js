import React  from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_EVENT } from '../utils/queries';

// import { EventName } from '../components/EventName';
// import { EventDiscription } from "../components/EventDiscription";
// import { ParticipantList } from '../components/ParticipantList';
// import { Details } from '../components/Details';

import Auth from '../utils/auth'
import { Map } from '../components/Map';
import Carousel from '../components/Carousel'
import Nav from '../components/Nav';
import SendRsvp from '../components/SendRsvp';

import '../index.css';




const EventPage = () => {

    const { id: eventId } = useParams();

    const { loading, data } = useQuery(QUERY_EVENT, {
        variables: { id: eventId },
     });
  
    const event = data?.event || {};    
// {dateFormat(event.date)}

    const eventDate = (timestamp) => new Date(timestamp).toUTCString()

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(event)
    return (
        <>
            <div>
                <div className='text'>
                    <h1 className="text">Party Hearty</h1>
                </div>
                <Carousel/>
                <Nav/>
            </div>
            <div>
                <h1 className='center'> {event.name} </h1>
                <br/>
                <div className='container'>
                    {/* <div className='left'>
                        <ParticipantList />
                    </div> */}
                    <div className='right'>
                        <div className='container justify-between'>
                        <div className="detail-box">
                            <div>Event hosted by: <span>{event.host} </span> </div>
                            <div>Event hosted on: <span> {eventDate(parseInt(event.date))} </span>  </div>
                            <div>Event hosted at: <span>{event.location}</span> </div>
                        </div>
                            <Map className='map' location={event.location}/>
                            <br/>
                            {Auth.loggedIn && (<SendRsvp eventId={event._id}/>)}

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
        </>
    );
};

export default EventPage;