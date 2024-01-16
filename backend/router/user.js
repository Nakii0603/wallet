import express from "express";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  loginUser,
} from "../controller/user.js";

const user = express.Router();

user.route("/auth").post(loginUser);
user.route("/").get(getUsers).post(createUser);
user.route("/user").get(getOneUser).delete(deleteUser);

export { user };
