import express from "express";
import { addCategory } from "../controller/category.js";

const category = express.Router();
export { category };

category.route('/adddata').post(addCategory);
const user = express.Router();

