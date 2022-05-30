// list of evevnt
// event going to/invited
// event hosted

import React from 'react';
import { Link } from 'react-router-dom';

function MeEventList ({ events }) {
    if (!events.length) {
        return <h3>No Events Yet</h3>;
    } else {

    const eventDate = (timestamp) => new Date(timestamp).toUTCString()

    return (
        <div className="card col-9">

            {events &&
            events.map(event => (
                   <>
                    <div key={event._id} className="card-body">
                        EventName : {event.name} <br/>
                        Description : {event.description}<br/>
                        Location : {event.location} <br/>
                        Date : {eventDate(parseInt(event.date))}<br/>
                        Fee : ${event.fee}<br/>
                    </div>
                    <ul>
                        <li> <Link to={`/event/${event._id}`} >Vist Event Page</Link> </li>
                    </ul>
                </>
                ))}
                        
        </div>
    )}
};



export default MeEventList;

