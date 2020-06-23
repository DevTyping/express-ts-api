require("dotenv").config()

module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USER,
    password: process.env.DEV_DATABASE_PASS,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_DATABASE_HOST,
    dialect: "postgres",
    operatorsAliases: 0,
  },
  test: {
    username: process.env.TEST_DATABASE_USER,
    password: process.env.TEST_DATABASE_PASS,
    database: process.env.TEST_DATABASE_NAME,
    host: process.env.TEST_DATABASE_HOST,
    dialect: "postgres",
    operatorsAliases: 0,
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    operatorsAliases: 0,
  },
}
