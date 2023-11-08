import { Router } from "express";
import { User } from "../records/user.record";
import { hash } from "bcrypt";
export const userRouter = Router();
userRouter
  .get("/", async (req, res) => {
    const userList = await User.findAll();
    res.json({ userList });
  })
  .get("/:userId", async (req, res) => {
    const user = await User.findOne(req.params.userId);
    res.json({ user });
  })
  .post("/", async (req, res) => {
    try {
      const hashedPassword = await hash(req.body.password, 10);
      const user = { ...req.body, password: hashedPassword };
      const newUser = new User(user);
      await newUser.insert();
      res.json(newUser);
    } catch {
      res.status(500);
    }
  });
