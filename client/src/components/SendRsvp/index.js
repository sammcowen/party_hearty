import React, { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import { SEND_RSVP } from '../../utils/mutations';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import AddIcon  from '@mui/icons-material/Add';




function SendRsvp(props) {
    const [searchUser, { loading, error, data }] = useLazyQuery(QUERY_USERS);
    const [formState, setFormState] = useState({ username: '' });
    const [inviteOpen, setInviteOpen] = useState(false)
    const [sendRsvp] = useMutation(SEND_RSVP);
    const { eventId } = props;


    const handleSearch = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleClick =  async (event) => {
        event.preventDefault();
        const { username } = formState;
        try {
           await searchUser({ 
                variables: {username: username}
            })
        } catch (e) {
            console.log(e)
        }
        setInviteOpen(true);
    }
    const user = data?.user || {};


    console.log(user.username);

    const handleSend = async (event) => {
        const { username } = formState;

        try {
          const RSVP = await sendRsvp({
                variables: {
                    attending: false,
                    invitedUserId: user._id,
                    eventId: eventId,
                    username: username,
                }
            })
            console.log(RSVP)
        } catch (e) {
            console.error(e);
        }
        setInviteOpen(false);
    }
    

    return (
        <Card sx={{ maxWidth: 250, maxHeight: 300, marginLeft: 5, }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Send an Invite!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Search for the username that you would like to send an RSVP to!
                </Typography>
            </CardContent> 
                    {loading && (
                        <Stack sx={{ color: 'grey.500', justifyContent: 'center' }} spacing={2} direction="row">
                            <CircularProgress color="secondary" />
                        </Stack>
                    )}
                    {inviteOpen && user.username && (
                        <Paper elevation={24} sx={{marginTop: 1, textAlign: 'center'}} >
                            <h3>
                                {user.username}
                                <span>
                                    <Fab onClick={handleSend} sx={{ marginLeft: 4, justifyContent: 'center' }} color="secondary" aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                </span>
                            </h3>
                        </Paper> 
                    )}
                    {inviteOpen && !user.username && (
                        <div>No user found!</div>
                    )}
            <CardActions sx={{justifyContent: 'center'}}>
                <form  type="text">
                    <input onChange={handleSearch} className='seachRsvp' name='username' type="text"></input>
                    <Button variant="outlined" sx={{marginTop: 2}} onClick={handleClick} size="small" type='search'>search</Button>
                </form>
            </CardActions>
        </Card>
    );
}

export default SendRsvp;
