const { ApolloServer, gql } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,

    animal: (parent, args, context) => {
      let animalToBeFound = animals.find((animal) => animal.slug === args.slug);
      return animalToBeFound;
    },

    categories: () => categories,
    category: (parent, args, context) => {
      const categoryById = categories.find(
        (category) => category.slug === args.slug
      );
      return categoryById;
    },
  },
  Category: {
    animals: (parent, args, context) => {
      const animal = animals.filter((animal) => animal.category === parent.id);
      return animal;
    },
  },
  Animal: {
    category: (parent, args, context) => {
      const category = categories.filter(
        (category) => category.id === parent.category
      );
      return category;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
