import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productController";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema,updateProductSchema } from "../../db/productsSchema";
import { verifyToken } from './../../middlewares/authMiddleware';

 



// endpoints products

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", verifyToken, validateData(createProductSchema), createProduct);
router.put("/:id", verifyToken, validateData(updateProductSchema), updateProduct);
router.delete("/:id", verifyToken, deleteProduct);

export default router;
