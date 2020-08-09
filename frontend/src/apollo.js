import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  resolvers: {
    // backend schema type
    MovieX: {
      // filed name
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, props, context ) =>  {
        const { id, isLiked } = props;
        const { cache } = context;
        console.log({ id, isLiked });
        cache.writeData({
          id: `MovieX:${id}`,
          data: {
            isLiked: !isLiked,
          }
        })
      },

    }

  }

});


export default client;
