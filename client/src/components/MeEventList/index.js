
import React from 'react';
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom';
import { DELETE_EVENT } from '../../utils/mutations'
import './style.css';

function MeEventList({ events }) {

    // setting state for 
    // const [eventsList, seteventsList] = useState({eventId:''});

    const [deleteEvent, { error }] = useMutation(DELETE_EVENT);



    const handleDeleteEvent = async (eventId) => {
        console.log(`eventId: ${eventId}`)
        try {
            await deleteEvent({
                variables: { eventId }
            });
            // seteventsList(removedEvent);
        }
        catch (err) {
            console.error(error);
        }
    }


    if (!events.length) {
        return <h3>No Events Yet</h3>;
    } else {

        const eventDate = (timestamp) => new Date(timestamp).toUTCString()


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
                                    <button className="rand" style={{backgroundColor: "#b026ff"}} > <Link to={`/event/${event._id}`} style={{textDecoration: "none"}} className="rando">Vist Event Page</Link> </button>
                                    <button className="rand" style={{backgroundColor: "#b026ff"}}> <Link to={`/event/update/${event._id}`} style={{textDecoration: "none"}} className="rando"> Update Event </Link> </button>
                                    <button type='submit' className={event._id} style={{backgroundColor: "#b026ff"}} onClick={() => handleDeleteEvent(event._id)}> Delete Event </button>
                                </div>
                            </div>
                        </form>

                    ))}

            </div>
        )
    }
};



export default MeEventList;

