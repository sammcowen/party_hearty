import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function UserEventList({ events }) {


    if (!events.length) {
        return <h3>No Events Yet</h3>;
    } else {

        const eventDate = (timestamp) => new Date(timestamp).toUTCString()

        // console.log(events.map((event)=>{event._id}));
        return (
            <div className="card col-9">

                {events &&
                    events.map(event => (
                            <form key={event._id}>
                                <div className="card-body">
                                    EventName : {event.name} <br />
                                    Location : {event.location} <br />
                                    Date : {eventDate(parseInt(event.date))}<br />
                                    <div>
                                        <button style={{backgroundColor: "#b026ff"}}> <Link to={`/event/${event._id}`} style={{textDecoration: "none", color: "black"}} >Vist Event Page</Link> </button>
                                    </div>
                                </div>
                            </form>
                    ))}

            </div>
        )
    }
};



export default UserEventList;

