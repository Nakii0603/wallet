import express from "express";
import dotenv from "dotenv";
import { user } from "./router/user.js";
import { pool } from "./db.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8002;
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/users", user);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      avatar_img BYTEA,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type TEXT 
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createTableCategory", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS category (
      name VARCHAR(255) NOT NULL,
      descrition TEXT,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_image TEXT
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/droptable", async (_, res) => {
  try {
    const tableQueryText = `DROP TABLE users`;
    await pool.query(tableQueryText);
    res.end("okey");
  } catch (error) {
    console.log(error);
  }
});
