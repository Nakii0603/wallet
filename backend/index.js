import express from "express";
import dotenv from "dotenv";
import { user } from "./router/user.js";

dotenv.config();
const PORT = process.env.PORT || 8020;
const app = express();
app.use(express.json());
app.use("/users", user);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
