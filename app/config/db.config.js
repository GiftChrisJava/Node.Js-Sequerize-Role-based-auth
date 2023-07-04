module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DIALECT: "postgres",
  DB: "testdb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
