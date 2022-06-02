import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useLazyQuery } from '@apollo/client';

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';

import { QUERY_ALL_EVENTS } from '../../utils/queries';
import { CONFIRM_RSVP } from '../../utils/mutations';


function InviteList(props) {
    const { allInvitesRecieved } = props;
    const [cardOpen, setCardOpen] =  useState(false);
    const[getEvents, { loading, error, data }] = useLazyQuery(QUERY_ALL_EVENTS);
    const [replyRsvp] = useMutation(CONFIRM_RSVP);
    
    const [confirmOn, setConfirmOn] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setCardOpen(!cardOpen);
        getEvents();
    }

    const events = data?.events || []


    const invitedEvents = events.filter(event => {
        for (let i = 0; i < allInvitesRecieved.length; i++) {
            return allInvitesRecieved[i].eventId === event._id
        }
    })
    // console.log(allInvitesRecieved);
    // console.log(events)
    // console.log(invitedEvents)

    const handleChange = () => {
        setConfirmOn(!confirmOn);
    }
    console.log(confirmOn);

    return (
        <>
            {cardOpen && (
                    <List sx={{overflow: 'auto',  width: '100%', maxWidth: 360, maxHeight: 260, bgcolor: 'background.paper', marginTop: 1}}>
                                {invitedEvents.length === 0 && (
                                    <ListItem>
                                        <ListItemText className='invited' primary="You have no invites!"/>
                                    </ListItem>
                                )}
                                {loading ? (
                                    <div>Loading...</div>
                                 ) : invitedEvents.map((invitedEvent, i) => {
                                    return (
                                        <ListItem key={invitedEvent._id + i}>
                                            <ListItemText className='invited' primary={`${invitedEvent.name}`} secondary={`${invitedEvent.description}`}/>
                                            <span className='invited'>RSVP</span>
                                            <Switch onChange={()=> {
                                                handleChange();
                                               const eventData= replyRsvp({
                                                    variables: {
                                                        eventId: invitedEvent._id,
                                                        attending: confirmOn
                                                    }
                                                });
                                                console.log(eventData);
                                            }}/>
                                        </ListItem>
                                    )
                                })}
                    </List>
            )}
            <div className="invites">

                <Badge sx={{marginTop: 2}} badgeContent={invitedEvents.length} color="primary">
                    <MailIcon onClick={handleClick} color='secondary'/>
                </Badge>
            </div>
        </>

    )
};

export default InviteList;