import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Book } from "./entities/book.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Book],
  synchronize: true,
});
