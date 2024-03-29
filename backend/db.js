import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;

dotenv.config();

export const pool = new Pool({
  ssl: true,
  connectionString: process.env.DB_URL,
});

// import pg from "pg";
// import dotenv from "dotenv";

// const { pool } = pg;

// dotenv.config();

// export const pool = new pool({
//   ssl: true,
//   connectionString: process.env.DB_URL,
// });
