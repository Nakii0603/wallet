export const getOneUser = app.get("/user", async (req, res) => {
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
export const getUsers = app.get("/users", async (req, res) => {
  try {
    const queryText = `SELECT * FROM users`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
});
export const deleteUser = app.delete("/user/:id", async (req, res) => {
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