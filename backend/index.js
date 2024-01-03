import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

