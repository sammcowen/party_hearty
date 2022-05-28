import React from 'react';

function EventForm () {
    const [eventName,  seteventName] = React.useState('');
    const [eventDescription, seteventDescription]  = React.useState('');
    const[eventFee,seteventFee]  = React.useState('');
    const[eventDate, seteventDate]  = React.useState('');
    const[eventLocation,seteventLocation]  = React.useState('');
    const[eventGuests,seteventGuests]  = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('eventName:', eventName);
        console.log('eventDescription', eventDescription);
        console.log('eventFee',eventFee);
        console.log('eventDate',eventDate);
        console.log('eventLocation',eventLocation);
        console.log('eventGuests',eventGuests);
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="eventName" >Event Name</label>
                    <input type="text" id="eventName" value ={eventName} onChange={(e) => seteventName(e.target.value)} placeholder="Samm's Birthday"/>
                </div>
                <div >
                    <label htmlFor="eventDescription" >Event Description</label>
                    <textarea  id="eventDescription" value ={eventDescription} onChange={(e) => seteventDescription(e.target.value)} rows="3"></textarea>
                </div>
                <div>
                    <label htmlFor="eventFee" >Event Fee</label>
                    <input type="text" id="eventFee" value ={eventFee} onChange={(e) => seteventFee(e.target.value)}placeholder="150"/>
                </div>
                <div>
                    <label htmlFor="eventDate" >Event Date</label>
                    <input type="text" id="eventDate" value ={eventDate} onChange={(e) => seteventDate(e.target.value)}placeholder="June 16"/>
                </div>
                <div>
                    <label htmlFor="eventLocation" >Event Location</label>
                    <input type="text" id="eventLocation" value ={eventLocation} onChange={(e) => seteventLocation(e.target.value)}placeholder="My House"/>
                </div>
                <div>
                    <label htmlFor="eventGuests" >Event Date</label>
                    <input type="text" id="eventGuests" value ={eventGuests}
                    onChange={(e) => seteventGuests(e.target.value)} placeholder="Everyone!"/>
                </div>
            </form>
            <button type="submit">Submit Your Event</button>
            </div>
    );
    

};

export default EventForm;