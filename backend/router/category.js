import express from "express";
import { addCategory, createTableCategory } from "../controller/category.js";

const category = express.Router();
export { category };

category.route("/adddata").post(addCategory);
category.route("/create").post(createTableCategory);
