import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controller/productController.js";

const router = express.Router();

//@desc GET all products
//@route GET /api/products
//@access PUBLIC
router.get("/", getAllProducts);

//@desc GET product by ID
//@route GET /api/products/:id
//@access PUBLIC
router.get("/:id", getProductById);

export default router;
