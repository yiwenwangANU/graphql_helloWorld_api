// A map of functions which return data for the schema.
import users from "../dummyData.js";

const resolvers = {
  Query: {
    users: () => users, // normally database access here, this time use dummy data
    user: (parent, args) => {
      return users.find((one) => one.id == args.id);
    },
  },
};

export default resolvers;
