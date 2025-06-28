// The GraphQL schema
const typeDefs = `#graphql
    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }
    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters:Boolean!
    }
    type Query {
        users: [User!]! 
        user(id:ID!):User!
        movies: [Movie!]!
        movie(name:String!): Movie!
    }
    input CreateUserInput  {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = BRAZIL
    }
    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }
    input DeleteUserInput {
        id: ID!
    }
    type Mutation {
        createUser(input:CreateUserInput!): User!
        updateUsername(input:UpdateUsernameInput): User!
        deleteUser(input:DeleteUserInput): User!
    }
    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
        UKRAINE
    }
`;

export default typeDefs;
