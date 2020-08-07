const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./graphql/resolvers');

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `
//
// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// }

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql' ,
  resolvers
})
server.start(() => {
  console.log('Server is running on localhost:4000')
});

