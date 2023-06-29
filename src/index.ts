import 'reflect-metadata';
import * as express from "express"
import * as dotenv from "dotenv";
import BookController from './controllers/BookController';
import { AppDataSource } from './data-source';

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use('/', BookController)

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });