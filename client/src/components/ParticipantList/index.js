import React from 'react';
import './style.css';


export const ParticipantList = (guests) => {

    // const {guests} = props;

    console.log(guests);
    
    if(!guests.length){
        return <h3>No invites recieved.</h3>
    }else {
 
    return (
        <div className='guest-list'>
            <h2>Guest List</h2>
            <ul>
            {guests &&
            guests.map((invitesRecieved, i) =>(
                <>
                    <div key={i}>
                    <p>
                        {invitesRecieved.attending.toString()}
                    </p>
                    </div>
                </>
            ))}
            </ul>
        </div>
    )}
}