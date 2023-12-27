import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import { pool } from "./db.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(bp.json());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

app.get("/users", async (req, res) => {
  try {
    const queryText = `SELECT * FROM users`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/user", async (req, res) => {
  const { name, email } = req.body;
  try {
    const queryText = "SELECT * FROM users WHERE name=$1 AND email=$2";
    const response = await pool.query(queryText, [name, email]);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/user", async (req, response) => {
  const { name, email } = req.body;
  console.log(name, email, "req.body");
  try {
    const queryText =
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
    const res = await pool.query(queryText, [name, email]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
});

app.delete("/user/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const queryText = "DELETE FROM users WHERE id = $1";
    await pool.query(queryText, [userId]);
    res.send("ok");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
