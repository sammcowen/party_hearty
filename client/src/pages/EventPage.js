import React  from 'react';
import { EventName } from '../components/EventName';
import { EventDiscription } from "../components/EventDiscription";
import { ParticipantList } from '../components/ParticipantList';
import { Map } from '../components/Map';


const EventPage = () => {

    return (
        <>
            <EventName />
            <br/>
            <div className='container'>
                <div className='left'>
                    <ParticipantList />
                </div>
                <div className='right column'>
                    <Map/>
                    <br/>
                    <EventDiscription /> 
                </div>
                
            </div>
        </>
    );
};

export default EventPage;