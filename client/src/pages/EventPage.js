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
            <ParticipantList />
            <br/>
            <Map/>
            <br/>
            <EventDiscription /> 
            <br/>
        </>
    );
};

export default EventPage;