import React from 'react';
import './style.css';

// list of guest array
// icon to have guest mark as pending/going/not going/ unsure
// list of particpants next to the nav

export const ParticipantList = () => {

    return (
        <div className='guest-list'>
            <h2>Guest List</h2>
            <ul>
                <li>bob</li>
                <li> tom</li>
                <li>tiffany</li>
                <li>jacob</li>
            </ul>
            {/* 
            {state.guests.length ? (
                <div>
                    {filterGuest().map((User))}
                </div>
            )}
            */}
        </div>
    )
}