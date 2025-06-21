// A map of functions which return data for the schema.
import users from "../dummyData.js";

const resolvers = {
  Query: {
    users: () => users,
  },
};

export default resolvers;
