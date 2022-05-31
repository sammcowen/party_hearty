import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import MeEventList from '../components/MeEventList';


const HomePageUser = () => {

    const { username: userParam } = useParams();
    const { loading, data } = useQuery(QUERY_ME, {
        variables: { username: userParam },
    });

    const me = data?.me || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className='text'>
                <h1 className="text">Party Hearty</h1>
            </div>
            <Carousel/>
            <Nav/>
            <h1>Hello {me.username} 🎉</h1>
            
            <div className='homestep'>
                <h2>Your upcoming events..</h2>
                <a href={'/EventFormPage'}><button class="rando">Create New Event!</button></a>
                <MeEventList
                    events={me.events}
            
                />    
                       
            </div>
        <Footer/>
        </>
    )
}

export default HomePageUser;