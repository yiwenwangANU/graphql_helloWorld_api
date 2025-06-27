# Query

### Get all movies

```
query GetAllMovies {
  movies {
    id
    name
  }
}
```

### Get movie by name

```
query GetMovieByName($name: String!) {
  movie(name: $name) {
    id
    name
    yearOfPublication
  }
}
variable
{
  "name": "Inception"
}
```

### Get user's favorite movie

```
query GetFavoriteMoviesOfUser( $userId: ID!) {
  user(id: $userId) {
    name
    favoriteMovies {
      name
      yearOfPublication
    }
  }
}
```

# Mutation

### Create a new user

```
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    name
    age
  }
}
variable
{
  "input": {
    "name": "name",
    "username": "username",
    "age": 20}
}
```
