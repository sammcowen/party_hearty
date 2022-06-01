import React from 'react';
import { Link } from 'react-router-dom';


function InviteList (allInvitesRecieved) {

    console.log(allInvitesRecieved)
    if(!allInvitesRecieved.length){
        return <h3>No invites recieved.</h3>
    }else {

    return (
        <div cassName ='card col-9'>
            {allInvitesRecieved &&
            allInvitesRecieved.map(invitesRecieved =>(
                <>
                    <div>{invitesRecieved.attending}</div>
                </>
            ))}

        </div>
    )}
};

export default InviteList;