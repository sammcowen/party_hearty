import React from 'react';
import './style.css';

// list of guest array
// icon to have guest mark as pending/going/not going/ unsure
// list of particpants next to the nav

export const ParticipantList = () => {
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
            {/* 
            {state.guests.length ? (
                <div>
                    {filterGuest().map((User))}
                </div>
            )}
            */}
        </div>
    )}
};

export default ParticipantList