import React from 'react';


import './style.css';

// info about event
export const EventDiscription = ( event) => {


    return(
        <div>
            <div className='description' key={event._id}>
               <p> Description {event.description} </p>
            </div>
        </div>
    );
};