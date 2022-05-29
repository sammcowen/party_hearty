import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_EVENT } from '../../utils/queries';

import './style.css';

// info about event
export const EventDiscription = (props) => {

    const { id: eventId } = useParams();

    const { loading, data } = useQuery(QUERY_EVENT, {
        variables: { id: eventId },
     });
  
    const event = data?.event || {};    

    if (loading) {
        return <div>Loading...</div>;
      }

    return(
        <div>
            <div className='description'>
               <p> Description {event.description} </p>
            </div>
        </div>
    );
};