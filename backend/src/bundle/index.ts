import app from './app';
import server from './server';

server.applyMiddleware({ app, cors: false });

app.listen({ port: process.env.API_PORT }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${process.env.API_PORT}${server.graphqlPath}`,
  );
});
