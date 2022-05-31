import React, { useState } from 'react';


import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';
// import Auth from '../../utils/auth';

function EventForm() {

    const [eventInfo, seteventInfo] = useState({ name: '', description: '', date: '', location: '', fee: '' });
    const handleChange = (event) => {
        seteventInfo({...eventInfo, [event.target.name]: event.target.value});
    }
    const newFee = parseInt(eventInfo.fee);
    console.log(newFee);

    async function handleSubmit (event) {
        event.preventDefault();
        try { 
            await addEvent({
                variables: { name: eventInfo.name, description: eventInfo.description, date: eventInfo.date, location: eventInfo.location, fee: newFee}
            });
            window.location.assign('/')
        } catch (e) {
            console.error(error);
        }
    } 


    const  [addEvent, {error}] = useMutation(ADD_EVENT)

    return (
        <div className='formstyle'>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Event Name</label>
                    <input type="text" className="form-control" name="name" value = {eventInfo.name} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="description" className="form-label">Event Description</label>
                    <textarea name="description" className="form-control" value={eventInfo.description} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="date" className="form-label">Event Date</label>
                    <input type="date" className="form-control" name="date" placeholder="June 16" value={eventInfo.date} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="location" className="form-label">Event Location</label>
                    <input type="text" className="form-control" name="location" placeholder="Vegas!" value={eventInfo.location}  onChange={handleChange}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="fee" className="form-label">Event Fee</label>
                    <input type="text" className="form-control" name="fee" placeholder="100" value={eventInfo.fee} onChange={handleChange} />
                </div>

                <div className="col-12">
                    <button type="submit" className="rando btn">Create Event</button>
                </div>
            </form>
        </div>
    );
};



export default EventForm;