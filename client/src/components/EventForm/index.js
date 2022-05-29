import React, { useState } from 'react';

// import { useMutation } from '@apollo/client';
// import { ADD_EVENT } from '../../utils/mutations';
// import Auth from '../../utils/auth';

function EventForm({addEvent}) {

    const [eventInfo, seteventInfo] = useState({ name: '', description: '', date: '', location: '', fee: '' });
    const handleChange = (event) => {
        seteventInfo({...eventInfo,[event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addEvent(eventInfo);
        seteventInfo({name:'',description: '', date: '', location: '', fee: ''})
    }
    return (
        <div className='formstyle'>
            <form onSubmit={handleSubmit}class="row g-3">
                <div class="col-md-6">
                    <label htmlFor="name" class="form-label">Event Name</label>
                    <input type="text" class="form-control" name="name" value = {eventInfo.name} onChange={handleChange} />
                </div>
                <div class="col-md-6">
                    <label htmlFor="description" class="form-label">Event Description</label>
                    <textarea name="description" class="form-control" value={eventInfo.description} onChange={handleChange} />
                </div>
                <div class="col-12">
                    <label htmlFor="date" class="form-label">Event Date</label>
                    <input type="date" class="form-control" name="date" placeholder="June 16" value={eventInfo.date} onChange={handleChange} />
                </div>
                <div class="col-12">
                    <label htmlFor="location" class="form-label">Event Location</label>
                    <input type="text" class="form-control" name="location" placeholder="Vegas!" value={eventInfo.location}  onChange={handleChange}/>
                </div>
                <div class="col-md-6">
                    <label htmlFor="fee" class="form-label">Event Fee</label>
                    <input type="text" class="form-control" name="fee" placeholder="100" value={eventInfo.fee} onChange={handleChange} />
                </div>

                <div class="col-12">
                    <button type="submit" class="rando btn">Create Event</button>
                </div>
            </form>
        </div>
    );
};



export default EventForm;