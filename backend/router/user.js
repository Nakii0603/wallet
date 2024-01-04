import express from "express";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
} from "../controller/user.js";

const user = express.Router();

user.route("/").get(getUsers).post(createUser).delete(deleteUser);
user.route("/createUser").post(createUser);
user.route("/user").get(getOneUser).delete(deleteUser);

export { user };
