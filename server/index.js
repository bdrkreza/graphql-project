const { ApolloServer, gql } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const typeDefs = require("./schema");

const resolvers = {
  Query,
  Category,
  Animal,
  Mutation,
};

const context = {
  mainCards,
  animals,
  categories,
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
