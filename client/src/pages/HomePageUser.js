import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

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
        <div>
        <div className='text'>
                <h1 className="text">Party Hearty</h1>
            </div>
            <Carousel/>
            <Nav/>
            <h1>Hello {me.username} 🎉</h1>

            <div className='homestep'>
                <h2>Your upcoming events..</h2>
            <div className="card col-9">
                    <div className="card-body">
                    EventName : Graduation Party <br/>
                    Description : A get together to celebrate all our hard work!<br/>
                    Location : Lucky Chances Casino <br/>
                    Date : 6/1/2022<br/>
                    Fee : None<br/>
                    </div>
                 </div>
                 <div className="card col-9">
                    <div className="card-body">
                    EventName : Samm's Birthday <br/>
                    Description : Celebrating Samm's 35th !<br/>
                    Location : Vegas <br/>
                    Date : 6/16/2022<br/>
                    Fee : $100<br/>
                    </div>
                 </div>

                
            </div>
            <Footer/>
        </div>
    )
}

export default HomePageUser;