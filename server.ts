import express, { Express, NextFunction, Request, Response } from 'express';
import qraphqlHttp from 'express-graphql';
import { buildSchema } from 'graphql';
import next from 'next';

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();


const data = {
  portfolios:[
    {
      _id:'xxx1',
      title:'xx1',
      jobTitle:'engineer',
      daysOfExperience:true,
      isCurrentlyEmployed:true
    },
    {
      _id:'xxx2',
      title:'xx1',
      content:'xxxx1',
      jobTitle:'engineer',
      daysOfExperience:true,
      isCurrentlyEmployed:true
    }
  ]
}

app.prepare().then(() => {
  const server: Express = express();

  const schema = buildSchema(`
    type Portfolio {
      _id: ID!
      title: String
      content: String
      jobTitle: String
      daysOfExperience: Boolean
      isCurrentlyEmployed: Boolean

    }
    type Query {
      hello: String,
      portfolio: Portfolio
      portfolios: [Portfolio]
    }
  `);

  // 提供解決每個 api endpoint
  const root = {
    hello: () => {
      return 'Hello World!';
    },
    portfolio: ()=>{
      return data.portfolios[0]
    },
    portfolios: ()=>{
      return data.portfolios
    }
  };

  server.use(
    '/graphql',
    qraphqlHttp({
      schema,
      rootValue: root,
      graphiql: true,
    })
  );

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Add this error handling middleware
  server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
  });

  server.listen(port, () => {
    console.log('> Ready on http://localhost:3000');
  });
});
