import service from "./service";

const resolvers = {
  Query: {
    responsives: (_, { query }) => service.findByQuery(query),
    responsive: (_, { id }) => service.getById(id)
  }
  // Mutation: {
  //   addResponsive: (_, { name, score }) => addResponsive(name, score),
  //   deleteResponsive: (_, { id }) => deleteResponsive(id)
  // }
};

export default resolvers;
