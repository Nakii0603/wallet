import express from "express";
import dotenv from "dotenv";
import { user } from "./router/user.js";
import { pool } from "./db.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 8010;
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/users", user);
const enableUuidOsspExtensionQuery =
  'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"';
pool.query(enableUuidOsspExtensionQuery, (err, result) => {
  if (err) {
    console.error("Error enabling uuid-ossp extension:", err);
  } else {
    console.log("uuid-ossp extension  enabled");
  }
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users(
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT,
      avatar_img BYTEA,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
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
