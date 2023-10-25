import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "postgres",
  password: "12345678",
  port: "5432",
});

pool.query(
  "CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(40) NOT NULL, lastname VARCHAR(40) NOT NULL)",
  (err, res) => {
    console.log(err, res);
    pool.end;
  }
);
