const { gql } = require('apollo-server-express');

export default gql`
    type Query {
        get(key: String!): String
    }
    
    type Mutation {
        set(key: String!, value: String!): Boolean!
    }
`;