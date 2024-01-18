import express from "express";

const PORT = process.env.PORT || 8010;
const app = express();

export const addCategory = async () => {
  const { name } = req.body;
  try {
    const queryText = `INSERT INTO category ( name)  VALUES ($1) RETURNING *`;
    const res = await pool.query(queryText, [name]);
    console.log(res, "okey");
    response.send(res.rows[0]);
  } catch (err) {
    console.error("add categeory error");
  }
};
