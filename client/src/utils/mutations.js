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
  mutation AddEvent($name: String!, $description: String!, $date: String!, $location: String!, $fee: Int) {
    addEvent(name: $name, description: $description, date: $date, location: $location, fee: $fee) {
      name
      description
      fee
      date
      location
      guests {
        firstName
        lastName
      }
      guestsRsvp {
        attending
        attendentId {
          firstName
          lastName
        }
        eventId
      }
      isPrivate
    }
  }
`;