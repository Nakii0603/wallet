
import { pool } from "../db.js";

export const createTransaction = async (req, res) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;
  try {
    const insertQuery = `
      INSERT INTO transactions (user_id, name, amount, transaction_type, description, category_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`;

    const result = await pool.query(insertQuery, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};