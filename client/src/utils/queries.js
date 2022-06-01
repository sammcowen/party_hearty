import { gql } from '@apollo/client';

export const QUERY_USERS = gql `
    query user($username: String!) {
        user(username: $username) {
            _id
            firstName
            lastName
            username
            email
            events {
                _id
                name
                description
                fee
                date
                location

            }
        }
    }
`;


// folowers {
//     _id
//     firstName
//     lastName
//     username
// }
// following {
//     _id
//     firstName
//     lastName
//     username
// }

// guests {
//     firstName
//     lastName
//     username
// }
// guestsRSVP {
//     attending
//     User {
//         firstName
//         lastName
//         username
//     }
// }
export const QUERY_ALL_USERS = gql `
    {
        users{
            _id
            firstName
            lastName
            username
            email
            
            events {
                _id
                name
                description
                fee
                date
                location
                
            }
        }
    }
`;

// folowers {
//     firstName
//     lastName
//     username
// }
// following {
//     firstName
//     lastName
//     username
// }

// guests {
//     firstName
//     lastName
//     username
// }
// guestsRSVP {
//     attending
//     User {
//         firstName
//         lastName
//         username
//     }
// }



export const QUERY_EVENTS = gql `
    query events($username:String){
        events(username: $username){
            _id
            name
            description
            fee
            date
            location

        }
    }
`;

            // guests {
            //     firstName
            //     lastName
            //     username
            // }
            // guestsRSVP {
            //     attending
            //     User {
            //         firstName
            //         lastName
            //         username
            //     }
            // }

export const QUERY_EVENT = gql `
    query event($id: ID!) {
        event(_id: $id) {
            _id
            name
            description
            fee
            date
            location
         
        }
    }
`;

   // guests {
            //     firstName
            //     lastName
            //     username
            // }
            // guestsRSVP {
            //     attending
            //     User {
            //         firstName
            //         lastName
            //         username
            //     }
            // }

export const QUERY_ME = gql `
    {
        me {
            _id
            firstName
            lastName
            username
            email
            events {
                _id
                name
                description
                fee
                date
                location
            }
            invitesRecieved {
                attending
                invitedUserId
                eventId
            }
        }
    }
`;

// folowers {
//     firstName
//     lastName
//     username
// }
// following {
//     firstName
//     lastName
//     username
// }
// guests {
//     firstName
//     lastName
//     username
// }
// guestsRSVP {
//     attending
//     User {
//         firstName
//         lastName
//         username
//     }
// }