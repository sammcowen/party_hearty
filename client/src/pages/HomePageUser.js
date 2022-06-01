import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


import Footer from '../components/Footer';
import MeEventList from '../components/MeEventList';
import Header from '../components/Header';


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
           <Header/>
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