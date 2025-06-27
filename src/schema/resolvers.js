// A map of functions which return data for the schema.
import { UserList, MovieList } from "../dummyData.js";

const resolvers = {
  Query: {
    users: () => UserList, // normally database access here, this time use dummy data
    user: (parent, args) => {
      // use args to access data
      return UserList.find((one) => one.id == args.id);
    },
    movies: () => MovieList,
    movie: (parent, args) => {
      return MovieList.find((movie) => movie.name == args.name);
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      const user = UserList.find((user) => user.id == id);
      user.username = newUsername;
      return user;
    },
    deleteUser: (parent, args) => {
      const { id } = args.input;
      const index = UserList.findIndex((user) => user.id == id);
      const user = UserList.pop(index);
      return user;
    },
  },
  User: {
    favoriteMovies: () =>
      MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      ),
  },
};

export default resolvers;
