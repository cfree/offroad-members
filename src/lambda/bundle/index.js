require('dotenv').config({ path: '.env' });

const { app } = require('./app');
const { server } = require('./server');

server.applyMiddleware({ app, cors: false });

app.listen({ port: process.env.API_PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
