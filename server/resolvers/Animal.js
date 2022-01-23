const Animal = {
  category: (parent, args, { categories }) => {
    const category = categories.filter(
      (category) => category.id === parent.category
    );
    return category;
  },
};

module.exports = Animal;
