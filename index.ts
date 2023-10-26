import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { handleError } from "./utils/error";
import { productRouter } from "./routers/product";
import { categoryRouter } from "./routers/category";

const app = express();
app.use(
  cors({
    origin: "https://localhost:3000",
  })
);
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
  })
);
app.use("/products", productRouter);
app.use("/category", categoryRouter);
app.use(handleError);
app.listen(3002, "0.0.0.0", () => {
  console.log("http://localhost:3002");
});
