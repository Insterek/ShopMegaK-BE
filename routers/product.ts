import { Router } from "express";
import { AdProduct } from "../records/adProduct.record";

export const productRouter = Router();
productRouter
  .get("/", async (req, res) => {
    const productList = await AdProduct.findAll();
    res.json({ productList });
  })
  .get("/:id", async (req, res) => {
    const product = await AdProduct.findOne(req.params.id);
    res.json({ product });
  })
  .post("/", async (req, res) => {
    const newProduct = new AdProduct(req.body);
    await newProduct.insert();
    res.json({ newProduct });
  });
