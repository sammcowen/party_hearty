import React from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_EVENT } from '../../utils/mutations';
// import Auth from '../../utils/auth';

function EventForm(props) {
    // const[formState, setFormState] = useState({ eventName:'',eventDescription:'', eventDate:'', eventLocation:'', eventFee:''});
    // const [addEvent] = useMutation(ADD_EVENT);
    const [eventName, seteventName] = React.useState('');
    const [eventDescription, seteventDescription] = React.useState('');
    const [eventFee, seteventFee] = React.useState('');
    const [eventDate, seteventDate] = React.useState('');
    const [eventLocation, seteventLocation] = React.useState('');
    // const [eventGuests, seteventGuests] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(eventName);
        console.log(eventDate);
        console.log(eventLocation);
        console.log(eventFee);
        console.log(eventDescription);
        

       
    };
    
        return (
            <div className='formstyle'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="eventName" >Event Name :</label>
                        <input type="text" id="eventName" value={eventName} onChange={(e) => seteventName(e.target.value)} placeholder="Samm's Birthday" />
                    </div>
                    <div >
                        <label htmlFor="eventDescription" >Event Description :</label>
                        <textarea id="eventDescription" value={eventDescription} onChange={(e) => seteventDescription(e.target.value)} rows="2"></textarea>
                    </div>
                    <div>
                        <label htmlFor="eventDate" >Event Date :</label>
                        <input type="text" id="eventDate" value={eventDate} onChange={(e) => seteventDate(e.target.value)} placeholder="June 16" />
                    </div>
                    
                    <div>
                        <label htmlFor="eventLocation" >Event Location :</label>
                        <input type="text" id="eventLocation" value={eventLocation} onChange={(e) => seteventLocation(e.target.value)} placeholder="My House" />
                    </div>
                    <div>
                        <label htmlFor="eventFee" >Event Fee :</label>
                        <input type="text" id="eventFee" value={eventFee} onChange={(e) => seteventFee(e.target.value)} placeholder="June 16" />
                    </div>
                    <button type="submit">Submit Your Event</button>
                </form>

            </div>
    
        );


    };


    export default EventForm;