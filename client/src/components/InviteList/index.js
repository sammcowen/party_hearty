import React from 'react';
import { Link } from 'react-router-dom';

function InviteList (props) {

    const {allInvitesRecieved} = props;
    
    if(!allInvitesRecieved.length){
        return <h3>No invites recieved.</h3>
    }else {
  
    return (
        <div className ='card col-9'>
            {allInvitesRecieved &&
            allInvitesRecieved.map((invitesRecieved, i) =>(
                <>
                    <div key={i}>
                    <p>
                        {invitesRecieved.attending.toString()}
                    </p>
                    </div>
                </>
            ))}
        </div>
    )}
};
export default InviteList;