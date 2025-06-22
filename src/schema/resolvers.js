// A map of functions which return data for the schema.
import users from "../dummyData.js";

const resolvers = {
  Query: {
    users: () => users, // database access here
  },
};

export default resolvers;
