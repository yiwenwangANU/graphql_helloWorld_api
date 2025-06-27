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
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = users[users.length - 1].id;
      user.id = lastId + 1;
      users.push(user);
      return user;
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      const user = users.find((user) => user.id == id);
      user.username = newUsername;
      return user;
    },
    deleteUser: (parent, args) => {
      const { id } = args.input;
      const index = users.findIndex((user) => user.id == id);
      const user = users.pop(index);
      return user;
    },
  },
  User: {
    favoriteMovies: () =>
      movieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      ),
  },
};

export default resolvers;
