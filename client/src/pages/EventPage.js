import React  from 'react';
import { EventName } from '../components/EventName';
import { EventDiscription } from "../components/EventDiscription";
import { ParticipantList } from '../components/ParticipantList';
import { Map } from '../components/Map';
import { Details } from '../components/Details';
import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import '../index.css';


const EventPage = () => {

    return (
        <>
            <div>
                <Jumbotron/>
                <Nav/>
            </div>
            <div>
                <EventName />
                <br/>
                <div className='container'>
                    <div className='left'>
                        <ParticipantList />
                    </div>
                    <div className='right'>
                        <div className='container justify-between'>
                            <Details/>
                            <Map/>
                        </div>
                        <br/>
                        <EventDiscription /> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventPage;