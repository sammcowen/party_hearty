const { gql } = require('apollo-server-express');

const  typeDefs = gql `
    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        followers: [User]
        following: [User]
        events: [Event]
    }

    type Event {
        _id: ID
        name: String
        description: String
        fee: Int
        date: String
        location: String
        guests: [User]
        guestsRsvp: [Rsvp]
    }

    type Rsvp {
        attending: Boolean
        attendent: User
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username:String!): User
        events: [Event]
        event(_id: ID!): Event
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
        addEvent(name: String!, description: String!, date: String!, location: String!, fee: Int): Event
        addFollower (followerId: ID!): User
        addGuest(guestId: ID!, eventId: ID!): Event 
        removeGuest(guestId: ID!, eventId: ID!): Event
        removeEvent(eventId: ID!): Event
        removeFollowers(followersId: ID!): User
    }
`;

module.exports = typeDefs;