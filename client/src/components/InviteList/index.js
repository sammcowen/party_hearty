import React, { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_EVENT } from '../../utils/queries';


import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';




function InviteList(props) {
    const [searchEvent, { loading, error, data}] = useLazyQuery(QUERY_EVENT);
    const { allInvitesRecieved } = props;
    const [cardOpen, setCardOpen] =  useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setCardOpen(!cardOpen);
        handleLoad();
    }
    console.log(cardOpen);

    const handleLoad = async function (event, invite) {
        console.log('im hit!')
        try {
            const rsvpEvent = await searchEvent({
                variables: {
                    _id: invite.eventId
                }
            });
            return rsvpEvent;
        } catch (e) {
            console.log(e)
        }
    }
console.log(allInvitesRecieved);

    return (
        <>
            {cardOpen && (
                    <List  sx={{  width: '100%', maxWidth: 360, maxHeight: 500, bgcolor: 'background.paper', marginTop: 1}}>
                        { allInvitesRecieved.map((invite, i) => (
                        <ListItem className={'confirmRsvp'} key={{i}}>
                            <ListItemText primary={`${invite.username}`} />
                            <button>Confirm RSVP</button>
                        </ListItem>
                        ))}
                    </List>
                )}
            <div className="invites">

                <Badge sx={{marginTop: 2}} badgeContent={allInvitesRecieved.length} color="primary">
                    <MailIcon onClick={handleClick} color='secondary'/>
                </Badge>
            </div>
        </>

    )
};


export default InviteList;