import { pool } from "../db.js";
export const getOneUser =
  ("/user",
  async (req, res) => {
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

export const getPost =
  ("/createTable",
  async (_, res) => {
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

export const createUser = ("/user", async (req, response) => {
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

export const getUsers = ("/users", async (req, res) => {
  try {
    const queryText = `SELECT * FROM users`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
});

export const deleteUser = ("/user/:id", async (req, res) => {
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
