// const { Pool } = require("pg");
// require("dotenv").config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     require: true,
//   },
// });

// async function getPostgresVersion() {
//   const client = await pool.connect();
//   try {
//     const response = await client.query("SELECT version()");
//     console.log(response.rows[0]);
//   } finally {
//     client.release();
//   }
// }

// getPostgresVersion();

import { Express } from "express";
import postgres from "postgres"
const { Pool } = pg;

app.use(bp)