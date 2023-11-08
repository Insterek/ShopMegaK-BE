import { pool } from "../utils/db";
import { User } from "../records/user.record";
const defaultObj = {
  login: "Andrzej",
  password: "password",
  email: "email@wp.pl",
};
afterAll(async () => {
  await pool.end();
});
test("Create user", async () => {
  const user = new User(defaultObj);
  await user.insert();
  expect(user.id).toBeDefined();
  expect(user.login).toEqual("Andrzej");
});
test("find one user in database", async () => {
  const user = await User.findOne("f0e19e9e-ed3a-4efe-b92a-97b5452a4d1b");
  expect(user).toBeDefined();
  expect(user.email).toEqual("email@wp.pl");
});
test("User.findAll returns array of found entries.", async () => {
  const user = await User.findAll();
  expect(user).not.toEqual([]);
  expect(user[0].id).toBeDefined();
});
