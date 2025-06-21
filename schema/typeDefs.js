// The GraphQL schema
const typeDefs = `#graphql
    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
    }
    type Query {
        users: [User!]!
    }
`;

export default typeDefs;
