import express from 'express';
import chalk from 'chalk';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import environment from './configs/environment';
import errorsMiddleware from './middlewares/errors';
import router from './routes';

class App {
  constructor() {
    this.app = express();
    this.app.use(logger('dev', { skip: (req, res) => environment.nodeEnv === 'test' }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(cors());
    this.setRoutes();
  }

  setRoutes() {
    this.app.use(router);
    this.app.use(errorsMiddleware);
  }

  getApp() {
    return this.app;
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => {
      console.log(chalk.yellowBright.inverse.bold(`Server is Running on Port : ${port}!`));
    });
  }
}

export default App;
