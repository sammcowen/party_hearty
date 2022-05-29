import React , { useState }from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';
// import Auth from '../../utils/auth';

function EventForm(props) {
    const[formState, setFormState] = useState({ name:'',description:'', date:'', location:'', fee:''});
    const [addEvent] = useMutation(ADD_EVENT);
    const {name, description, date, location, fee} = formState;
  

    function handleChange(e) {
       setFormState({...formState, [e.target.name]: e.target.value})
        

       
    };
    const handleSubmit= async (event) => {
        event.preventDefault();
        console.log(setFormState);
        try {
            await addEvent({
                variables:{
                    name, description,date,location,fee
                }
            });
            setFormState('');
        }
        catch(e) {
            console.error(e);
        }
        
       
    };
    
        return (
            <div id="eventform"className='formstyle'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" >Event Name :</label>
                        <input type="text" name="name" defaultValue={name}  onChange={handleChange} placeholder="Samm's Birthday" />
                    </div>
                    <div >
                        <label htmlFor="description" >Event Description :</label>
                        <textarea name="description" defaultValue={description} onChange={handleChange} rows="2"></textarea>
                    </div>
                    <div>
                        <label htmlFor="date" >Event Date :</label>
                        <input type="text" name="date" defaultValue={date} onChange={handleChange} placeholder="June 16" />
                    </div>
                    
                    <div>
                        <label htmlFor="location" >Event Location :</label>
                        <input type="text" name="location" defaultValue={location} onChange={handleChange} placeholder="My House" />
                    </div>
                    <div>
                        <label htmlFor="fee" >Event Fee :</label>
                        <input type="text" name="fee" defaultValue={fee} onChange={handleChange} placeholder="June 16" />
                    </div>
                    <button type="submit">Submit Your Event</button>
                </form>

            </div>
    
        );


    };


    export default EventForm;