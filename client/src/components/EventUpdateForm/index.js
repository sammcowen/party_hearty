import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_EVENT } from '../../utils/queries';

import { useMutation } from '@apollo/client';
import { UPDATE_EVENT } from '../../utils/mutations';

// import Auth from '../../utils/auth';

function EventUpdateForm() {

    const { id: eventId } = useParams();
    const  [updateEvent, {error}] = useMutation(UPDATE_EVENT)


    const { loading, data } = useQuery(QUERY_EVENT, {
        variables: { id: eventId },
     });
  
    const event = data?.event || {};    

    console.log(event);

    const eventDate = (timestamp) => new Date(timestamp).toUTCString()


    // const [eventInfo, seteventInfo] = useState({ name: `${event.name}`, description: `${event.description}`, date: `${eventDate(parseInt(event.date))}`, location: `${event.location}`, fee: `${event.fee}` });
    const [eventInfo, setEventInfo] = useState({ name: ``, description: ``, date: ``, location: ``, fee: `` });
   
    const handleChange = (event) => {
        setEventInfo({...eventInfo, [event.target.name]: event.target.value});
    }
    const newFee = parseInt(eventInfo.fee);
    console.log(newFee);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({eventId: eventId ,description: eventInfo.description, date: eventInfo.date,  location: eventInfo.location, fee: newFee, name: eventInfo.name })
        try { 
            await updateEvent({
                variables: {eventId: eventId ,description: eventInfo.description, date: eventInfo.date,  location: eventInfo.location, fee: newFee, name: eventInfo.name }
            });
            window.location.replace('/')
        } catch (e) {
            console.error(error);
        }
    
    }

    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <div className='formstyle'>
            <h1>This Name: {event.name}</h1>
            <form onSubmit={handleSubmit}className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Event Name</label>
                    <input type="text" className="form-control" name="name" placeholder={`${event.name}`} value = {eventInfo.name} onChange={(event)=> setEventInfo({...eventInfo, name: event.target.value})} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="description" className="form-label">Event Description</label>
                    <textarea name="description" className="form-control" placeholder={`${event.description}`} value={eventInfo.description} onChange={(event)=> setEventInfo({...eventInfo, description: event.target.value})} />
                </div>
                <div className="col-12">
                    <label htmlFor="date" className="form-label">Event Date</label>
                    <input type="date" className="form-control" name="date" placeholder={`${eventDate(parseInt(event.date))}`} value={eventInfo.date} onChange={(event)=> setEventInfo({...eventInfo, date: event.target.value})} />
                </div>
                <div className="col-12">
                    <label htmlFor="location" className="form-label">Event Location</label>
                    <input type="text" className="form-control" name="location" placeholder={`${event.location}`} value={eventInfo.location}  onChange={(event)=> setEventInfo({...eventInfo, location: event.target.value})}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="fee" className="form-label">Event Fee</label>
                    <input type="text" className="form-control" name="fee" placeholder={`${event.fee}`} value={eventInfo.fee} onChange={(event)=> setEventInfo({...eventInfo, fee: event.target.value})} />
                </div> 

                <div className="col-12">
                    <button type="submit" className="rando btn">Update Event</button>
                </div>
            </form>
        </div>
    );
};



export default EventUpdateForm;