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
        isPrivate: Boolean
    }

    type Rsvp {
        attending: Boolean
        attendentId: User
        eventId: ID
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
        updateUser(firstName: String, lastName: String, username: String, email: String, password: String): User
        addEvent(name: String!, description: String!, date: String!, location: String!, fee: Int): Event
        addFollower (followerId: ID!): User
        addGuest(guestId: ID!, eventId: ID!): Event 
        updateEvent(eventId: ID!, name: String, description: String, date: String, location: String, fee: Int): Event
        removeGuest(guestId: ID!, eventId: ID!): Event
        removeEvent(eventId: ID!): Event
        removeFollowers(followersId: ID!): User
    }
    `;
    
    // rsvp mutation in case we come back to it 
    // confirmRsvp(eventId: ID!, attending: Boolean!): Event

    module.exports = typeDefs;