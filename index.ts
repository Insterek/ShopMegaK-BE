import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { handleError } from "./utils/error";
import { productRouter } from "./routers/product";
import { categoryRouter } from "./routers/category";
import { userRouter } from "./routers/user";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
// app.use(
//   rateLimit({
//     windowMs: 5 * 60 * 1000,
//     max: 1000,
//   })
// );
app.use("/products", productRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);
app.use(handleError);
app.listen(3002, "0.0.0.0", () => {
  console.log("http://localhost:3002");
});
