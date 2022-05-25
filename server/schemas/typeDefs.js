const { gql } = require('apollo-server-express');

const  typeDefs = gql `
type User {
    _id:
}

type Query {
    
}

Type Mutation {

}
`;

module.exports = typeDefs;