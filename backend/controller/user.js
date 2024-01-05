import { response } from "express";
import { pool } from "../db.js";
export const getOneUser =
  ("/user",
  async (req, res) => {
    const { name, email } = req.body;
    try {
      const queryText = "SELECT * FROM users WHERE name = $1 AND email=$2";
      const response = await pool.query(queryText, [name, email]);
      res.send(response.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

export const createUser =
  ("/user",
  async (req, response) => {
    const { name, email, password } = req.body;
    console.log(name, email, password, "req.body");
    try {
      const queryText =
        "INSERT INTO users (name, email,password) VALUES ($1, $2,$3) RETURNING *";
      const res = await pool.query(queryText, [name, email, password]);
      response.send(res.rows[0]);
    } catch (error) {
      console.error(error);
      response.send("error query");
    }
  });

export const getUsers =
  ("/users",
  async (req, res) => {
    try {
      const queryText = `SELECT * FROM users`;
      const response = await pool.query(queryText);
      res.send(response.rows);
    } catch (error) {
      console.error(error);
    }
  });

export const deleteUser =
  (
  async (req, res) => {
    const { id, name, email } = req.body;
    console.log(req.body);
    try {
      const queryText = `DELETE FROM users WHERE id = $1`;
      const result = await pool.query(queryText, [id]);
      res.send({ result });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  });
