import express from "express";
import { pool } from "../db.js";

const PORT = process.env.PORT || 8010;
const app = express();

export const addCategory = async (req, response) => {
  const { name } = req.body;
  console.log(req.body);
  try {
    const queryText = `INSERT INTO category ( name)  VALUES ($1) RETURNING *`;
    const res = await pool.query(queryText, [name]);
    console.log(res, "okey");
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error");
  }
};

export const createTableCategory = async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS category (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name TEXT,
      createdAt TIMESTAMP,
      updatedAt TIMESTAMP
    )`;
    // const tableQueryText = `DROP TABLE category`;

    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
};

// export const addCategory = async (_, req) => {
//   const { name } = req.body;
//   console.log(req.body);
//   try {
//     const queryText = `INSERT INTO category ( name)  VALUES ($1) RETURNING *`;
//     const res = await pool.query(queryText, [name]);
//     console.log(res, "okey");
//     response.send(res.rows[0]);
//   } catch (err) {
//     console.error("add categeory error");
//   }
// };
