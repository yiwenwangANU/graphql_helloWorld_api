// A map of functions which return data for the schema.
import { users, movieList } from "../dummyData.js";

const resolvers = {
  Query: {
    users: () => users, // normally database access here, this time use dummy data
    user: (parent, args) => {
      // use args to access data
      return users.find((one) => one.id == args.id);
    },
    movies: () => movieList,
    movie: (parent, args) => {
      return movieList.find((movie) => movie.name == args.name);
    },
  },
};

export default resolvers;
