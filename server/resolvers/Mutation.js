const { v4 } = require("uuid");

const Mutation = {
  addAnimal: (parent, { newAnimal }, { animals }) => {
    let createAnimal = {
      ...newAnimal,
      id: v4(),
    };
    animals.push(createAnimal);
    return createAnimal;
  },

  //Remove  from   animals

  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => animal.id === id);
    animals.splice(index, 1);
    return true;
  },
  updateAnimal: (parent, {id}, {animals}) => {

  },
};

module.exports = Mutation;
