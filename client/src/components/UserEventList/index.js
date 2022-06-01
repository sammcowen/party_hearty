import React from 'react';
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom';
import {DELETE_EVENT} from '../../utils/mutations'

function UserEventList ({ events }) {

    if (!events.length) {
        return <h3>No Events Yet</h3>;
    } else {

    const eventDate = (timestamp) => new Date(timestamp).toUTCString()

  
    return (
        <div className="card col-9">

            {events &&
            events.map(event => (
                   <>
                   <form>
                    <div key={event._id} className="card-body">
                        EventName : {event.name} <br/>
                        Location : {event.location} <br/>
                        Date : {eventDate(parseInt(event.date))}<br/>
                    </div>
                    <ul>
                        <li> <Link to={`/event/${event._id}`} >Vist Event Page</Link> </li>
                    </ul>
                    </form>
                </>
                ))}
                        
        </div>
    )}
};



export default UserEventList;

