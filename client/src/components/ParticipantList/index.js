import React from 'react';
import './style.css';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// list of guest array
// icon to have guest mark as pending/going/not going/ unsure
// list of particpants next to the nav

export const ParticipantList = (props) => {
    
    const { guests } = props;

    if(!guests.length){
        return <h3>No invites recieved.</h3>
    }else {

  
    return (
        <div className='guest-list'>
            <ul>
            {guests.map((confirmedRsvps, i) =>(
                <>
                    <div key={{i}}>
                    <p>
                        {confirmedRsvps.attending === false ? <DoNotDisturbAltIcon/> : <CheckCircleOutlineIcon/>}
                        {confirmedRsvps.username}
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