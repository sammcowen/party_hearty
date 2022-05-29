import React , { useState }from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_EVENT } from '../../utils/mutations';
// import Auth from '../../utils/auth';

function EventForm(props) {
    const[formState, setFormState] = useState({ eventName:'',eventDescription:'', eventDate:'', eventLocation:'', eventFee:''});
    // const [addEvent] = useMutation(ADD_EVENT);
    const {eventName, eventDescription, eventDate, eventLocation, eventFee} = formState;
    // const [eventName, seteventName] = React.useState('');
    // const [eventDescription, seteventDescription] = React.useState('');
    // const [eventFee, seteventFee] = React.useState('');
    // const [eventDate, seteventDate] = React.useState('');
    // const [eventLocation, seteventLocation] = React.useState('');
    // const [eventGuests, seteventGuests] = React.useState('');

    function handleChange(e) {
       setFormState({...formState, [e.target.name]: e.target.value})
        

       
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };
    
        return (
            <div id="eventform"className='formstyle'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="eventName" >Event Name :</label>
                        <input type="text" name="eventName" defaultValue={eventName}  onChange={handleChange} placeholder="Samm's Birthday" />
                    </div>
                    <div >
                        <label htmlFor="eventDescription" >Event Description :</label>
                        <textarea name="eventDescription" defaultValue={eventDescription} onChange={handleChange} rows="2"></textarea>
                    </div>
                    <div>
                        <label htmlFor="eventDate" >Event Date :</label>
                        <input type="text" name="eventDate" defaultValue={eventDate} onChange={handleChange} placeholder="June 16" />
                    </div>
                    
                    <div>
                        <label htmlFor="eventLocation" >Event Location :</label>
                        <input type="text" name="eventLocation" defaultValue={eventLocation} onChange={handleChange} placeholder="My House" />
                    </div>
                    <div>
                        <label htmlFor="eventFee" >Event Fee :</label>
                        <input type="text" name="eventFee" defaultValue={eventFee} onChange={handleChange} placeholder="June 16" />
                    </div>
                    <button type="submit">Submit Your Event</button>
                </form>

            </div>
    
        );


    };


    export default EventForm;