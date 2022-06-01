import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';


import Footer from '../components/Footer';
import UserEventList from '../components/UserEventList';
import Header from '../components/Header';

const UserProfile = () => {

    const { username: userParam } = useParams();
    const { loading, data } = useQuery(QUERY_USERS, {
        variables: { username: userParam },
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header/>
            <h1>Welcome to {user.username}'s page 🎉</h1>

            <div className='homestep'>
                <h2>{user.username} upcoming events..</h2>
                <UserEventList
                    events={user.events}
                />                
            </div>
        <Footer/>
        </>
    )
}

export default UserProfile;