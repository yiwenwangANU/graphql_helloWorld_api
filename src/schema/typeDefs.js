// The GraphQL schema
const typeDefs = `#graphql
    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }
    type Query {
        users: [User!]! 
        user(id:ID!):User!
    }
    enum Nationality {
        USA,
        Canada,
        UK,
        Australia,
        New Zealand,
        South Korea,
    }
`;

export default typeDefs;
