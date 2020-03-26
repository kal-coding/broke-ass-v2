import { connectionConfig } from './database/connection';
import 'dotenv/config';
import chalk  from 'chalk';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Request, Response } from 'express';
import express from 'express';
import * as bodyParser from 'body-parser';

import { AppRoutes } from './routes';

const { PORT } = process.env;

createConnection(connectionConfig)
  .then(async connection => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch(err => next(err));
        }
      );
    });

    // run app
    app.listen(PORT, () =>
      console.log(`

            I live and breathe on ${chalk.green(PORT)}
    
    `)
    );
  })
  .catch(error => {
    console.error(error, {}, 'Server crashed or failed to start');
    process.exit(1);
  });