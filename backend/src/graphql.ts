import serverlessHttp from 'serverless-http';

import app from './bundle/app';
import server from './bundle/server';

server.applyMiddleware({ app, cors: false });

export const handler = serverlessHttp(app, {
  request: (req: any, event: any, context: any) => {
    /**
     * **** IMPORTANT ****
     * this request() function is important because
     * it adds the lambda's event and context object
     * into the express's req object so you can access
     * inside the resolvers or routes if youre not using apollo
     */
    req.event = event;
    req.context = context;
  },
});
