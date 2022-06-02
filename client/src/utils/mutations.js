import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                firstName
                lastName
                email
            }
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) 
  {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($name: String!, $description: String!, $date: String!, $location: String!, $fee: Int) {
    addEvent(name: $name, description: $description, date: $date, location: $location, fee: $fee) {
      name
      description
      fee
      date
      location
      isPrivate
    }
  }
`;

// guests {
//   firstName
//   lastName
// }

// <<<<<<< HEAD
// guestsRsvp {
//   attending
//   attendentId {
//     firstName
//     lastName
//   }
export const DELETE_EVENT = gql`
  mutation removeEvent($eventId: ID!) {
    removeEvent(eventId:$eventId) {
      name
      description
      fee
      date
      location
      isPrivate
    }
  }

`;
// guests {
//   firstName
//   lastName
// }
// guestsRsvp {
//   attending
//   attendentId {
//     firstName
//     lastName
//   }

export const UPDATE_EVENT = gql`
mutation UpdateEvent($eventId: ID!, $description: String, $date: String, $location: String, $fee: Int, $name: String) {
  updateEvent(eventId: $eventId, description: $description, date: $date, location: $location, fee: $fee, name: $name) {
    name
    description
    fee
    date
    location
  }
}
`;

// guests
// guestsRsvp

export const SEND_RSVP = gql`
  mutation SendRsvp($attending: Boolean!, $invitedUserId: String, $eventId: String, $username: String) {
    sendRsvp(attending: $attending, invitedUserId: $invitedUserId, eventId: $eventId, username: $username) {
      _id
      firstName
      lastName
      username
      email
    }
  }
`;

export const CONFIRM_RSVP = gql`
  mutation confirmRsvp($attending: Boolean!, $eventId: String) {
    confirmRsvp(attending: $attending, eventId: $eventId) {
      _id
    }
  }
`;