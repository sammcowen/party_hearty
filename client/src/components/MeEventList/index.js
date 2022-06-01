
import React from 'react';
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom';
import {DELETE_EVENT} from '../../utils/mutations'

function MeEventList ({ events }) {

    // setting state for 
    // const [eventsList, seteventsList] = useState({eventId:''});

    const [deleteEvent, {error}] = useMutation(DELETE_EVENT);
    


    const handleDeleteEvent = async (eventId) =>{
       console.log(`eventId: ${eventId}`)
        try{
           await deleteEvent({
            variables: {eventId}
        });
        // seteventsList(removedEvent);
        }
        catch(err){
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
                   <>
                   <form>
                    <div key={event._id} className="card-body">
                        EventName : {event.name} <br/>
                        Location : {event.location} <br/>
                        Date : {eventDate(parseInt(event.date))}<br/>
                    </div>
                    <ul>
                        <li> <Link to={`/event/${event._id}`} >Vist Event Page</Link> </li>
                        <li> <Link to={`/event/update/${event._id}`}> Update Event </Link> </li>
                        <button type='submit' className={event._id} onClick={()=> handleDeleteEvent(event._id)}> Delete Event </button>
                    </ul>
                    </form>
                </>
                ))}       
        </div>
    )}
};



export default MeEventList;

