import { ApolloServer, gql } from 'apollo-server-express';
import express, { Express, NextFunction, Request, Response } from 'express';
import next from 'next';
import { portfolioMutations, portfolioQueries } from './graphql/resolvers';
import { portfolioTypes } from './graphql/types';

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server: Express = express();

  const typeDefs = gql`
    ${portfolioTypes}
    type Query {
      hello: String
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }

    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
    }
  `;

  // 提供解決每個 api endpoint
  const resolvers = {
    Query: {
      ...portfolioQueries,
    },
    Mutation: {
      ...portfolioMutations,
    },
  };

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  apolloServer.applyMiddleware({ app: server });

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
