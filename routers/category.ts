import { Router } from "express";
import { AdProduct } from "../records/adProduct.record";

export const categoryRouter = Router();
categoryRouter.get("/:category", async (req, res) => {
  const productCategory = await AdProduct.findCategory(req.params.category);
  res.json({ productCategory });
});
