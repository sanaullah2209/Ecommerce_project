import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productController";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema } from "../../db/productsSchema";

 



// endpoints products

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductById);
router.post("/", validateData(createProductSchema), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
