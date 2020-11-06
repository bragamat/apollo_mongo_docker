const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = gql`
  type Movie {
    title: String
    releaseDate: String
    rating: Int
  }

  type Query {
    movies: [Movie]
  }
`;

const resolvers = {
  Query: {
    movies: () => {
      return [
        {
          title: "about time",
          releaseDate: null,
          rating: 999999,
        },
        {
          title: "grown ups",
          releaseDate: null,
          rating: 999999,
        },
        {
          title: "grown ups 2",
          releaseDate: null,
          rating: 999999,
        },
      ];
    },
  },
};

const url = `mongodb://db/test`;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("successfully connected to the database");
    new ApolloServer({
      typeDefs,
      resolvers,
    })
      .listen({ port: 3000 })
      .then(({ url }) => console.log(`Server started at ${url}`));
  })
  .catch((err) => {
    console.log("error connecting to the database", err, process.env);
    process.exit();
  });
