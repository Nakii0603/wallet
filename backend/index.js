import express from "express";
import dotenv from "dotenv";
import { user } from "./router/user.js";
import { pool } from "./db.js";
import cors from "cors";
import { transaction } from "../backend/router/transaction.js";
import { category } from "./router/category.js";

dotenv.config();

const PORT = process.env.PORT || 8010;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/createTransaction", transaction);
app.use("/users", user);
app.use("category", category);

const enableUuidOsspExtensionQuery =
  'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"';
pool.query(enableUuidOsspExtensionQuery, (err, result) => {
  if (err) {
    console.error("Error enabling uuid-ossp extension:", err);
  } else {
    console.log("uuid-ossp extension enabled");
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
      password TEXT NOT NULL,
      avatar_img BYTEA,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
      currency_type TEXT 
    )`;
    await pool.query(tableQueryText);
    res.send("okey");
  } catch (error) {
    console.error(error);
  }
});
app.post("/createTableCategory", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS category (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      category TEXT,
      description TEXT,
      createdAt TIMESTAMP,
      updatedAt TIMESTAMP,
      category_image TEXT
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createTableTran", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS transaction (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id UUID REFERENCES users(id),
      name TEXT,
      amount REAL NOT NULL,
      transaction_type VARCHAR(3) CHECK (transaction_type IN ('INC', 'EXP')),
      description TEXT,
      createdAt TIMESTAMP DEFAULT NOW(),
      updatedAt TIMESTAMP DEFAULT NOW(),
      category_id UUID REFERENCES category(id)  
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/droptable", async (_, res) => {
  try {
    const tableQueryText = `DROP TABLE if exists category cascade`;
    await pool.query(tableQueryText);
    res.send("OK");
  } catch (error) {
    console.log(error);
  }
});
