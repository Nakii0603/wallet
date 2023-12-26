import pg from "pg";
import dotenv from "dotenv";
import { text } from "express";
const { Pool } = pg;

dotenv.config();

const pool = new pg({
  ssl: true,
  connectionString: process.env.DB_URL,
});

module.exports = {
  query: (text, params)= pool.query(text,params)
};
console.log(pool);