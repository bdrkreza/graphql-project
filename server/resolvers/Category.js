const Category = {
  animals: (parent, args, { animals }) => {
    const animal = animals.filter((animal) => animal.category === parent.id);
    return animal;
  },
};

module.exports = Category;
