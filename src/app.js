import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import environment from './configs/environment';

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

  setRoutes() {}

  getApp() {
    return this.app;
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => {
      console.log(`Listening at Port ${port}`);
    });
  }
}

export default App;
