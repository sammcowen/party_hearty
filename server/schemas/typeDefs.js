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
    fee: Boolean
    date: String
    location: String
    guests: [User]
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    me: User
    getEvent (_id: ID!): Event
    getEvents (username: String): [Event]
}

Type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEvent(name: String!, description: String!, date: String!, location: String!, guests: [User]): Event
    addGuest(username: String!): Event 
    addFriends (friendId: ID!): User
}
`;

module.exports = typeDefs;