import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productController.js";
import { validateData } from "../../middlewares/validationMiddleware.js";
import { createProductSchema,updateProductSchema } from "../../db/productsSchema.js";
import { verifySeller, verifyToken } from '../../middlewares/authMiddleware.js';

// endpoints products

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", verifyToken as any, verifySeller as any , validateData(createProductSchema), createProduct);
router.put("/:id", verifyToken as any, verifySeller as any, validateData(updateProductSchema), updateProduct);
router.delete("/:id", verifyToken as any, verifySeller as any, deleteProduct);

export default router;
