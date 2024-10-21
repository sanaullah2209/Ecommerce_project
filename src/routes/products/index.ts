import { Router } from "express";
// endpoints products
const router = Router();

router.get("/", (req, res) => {
  res.send("the list of product");
});
router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("A product");
});
router.post("/", (req, res) => {
  res.send("New products created");
});

export default router;