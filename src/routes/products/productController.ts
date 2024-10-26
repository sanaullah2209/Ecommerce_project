import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productsSchema";
import { eq } from "drizzle-orm";
// list product start from here
export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);
    res.status(201).json(products);
  } catch (e) {
    res.status(500).send(e);
  }
}

// end here
// fetch product here
export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (e) {
    res.status(500).send();
  }
}

// end here

// insert data from here ☘️
export async function createProduct(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
}
// till here code are running here➡️➡️

// update product are here bro
export async function updateProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const updatedFields = req.body;
  const [product] = await db.update(productsTable).set(updatedFields).where(eq(productsTable.id,id)).returning(); 
  if (product) {
    res.json(product)
  } else {
    res.status(404).send({ message: "Product not found to update" });
  } 

} catch (e) {
    res.status(500).send();
  }
}
// end here bro
// delete product here
export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [deleteProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, id))
      .returning();
    if (deleteProduct) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Product not found to delete" });
    }
  } catch (e) {
    res.status(500).send();
  }
}
// end here
