import * as dotenv from "dotenv"
import { Sequelize } from "sequelize"

dotenv.config()

let options: Object = {}
const env: String = process.env.NODE_ENV || "development"

switch (env) {
  case "development":
    options = {
      username: process.env.DEV_DATABASE_USER,
      password: process.env.DEV_DATABASE_PASS,
      database: process.env.DEV_DATABASE_NAME,
      host: process.env.DEV_DATABASE_HOST,
      dialect: "postgres",
      operatorsAliases: 0,
    }
    break
  case "test":
    options = {
      username: process.env.TEST_DATABASE_USER,
      password: process.env.TEST_DATABASE_PASS,
      database: process.env.TEST_DATABASE_NAME,
      host: process.env.TEST_DATABASE_HOST,
      dialect: "postgres",
      operatorsAliases: 0,
    }
    break
  case "production":
    options = {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      dialect: "postgres",
      operatorsAliases: 0,
    }
    break
}

export const database = new Sequelize(options)
