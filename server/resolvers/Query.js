const Query = {
  mainCards: (_, args, { mainCards }) => mainCards,
  animals: (_, args, { animals }) => animals,

  animal: (_, args, { animals }) => {
    let animalToBeFound = animals.find((animal) => animal.slug === args.slug);
    return animalToBeFound;
  },

  categories: (_, args, { categories }) => categories,
  category: (_, args, { categories }) => {
    const categoryById = categories.find(
      (category) => category.slug === args.slug
    );
    return categoryById;
  },
};

module.exports = Query;
