import React  from 'react';
import { EventName } from '../components/EventName';
import { EventDiscription } from "../components/EventDiscription";
import { ParticipantList } from '../components/ParticipantList';


const EventPage = () => {

    return (
        <>
            <EventName />
            <br/>
            <ParticipantList />
            <br/>
            <EventDiscription /> 
            <br/>
        </>
    );
};

export default EventPage;