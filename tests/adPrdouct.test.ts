import { execPath } from "process";
import { AdProduct } from "../records/adProduct.record";
import { pool } from "../utils/db";
const defaultObj = {
  title: "Ad Product",
  description: "random description",
  img_url: "http://link.com",
  price: 3,
  category: "woman",
};
afterAll(async () => {
  await pool.end();
});
test("AdProduct.insert returns new UUId", async () => {
  const adProduct = new AdProduct(defaultObj);
  await adProduct.insert();
  expect(adProduct.id).toBeDefined();
  expect(typeof adProduct.id).toBe("string");
});
test("AdProduct.insert inserts data to database", async () => {
  const adProduct = new AdProduct({
    title: "teddy",
    description: "small toy",
    img_url: "http://addwd.com",
    price: 33,
    category: "man",
  });
  await adProduct.insert();
});
test("AdProduct.getOne to find one product in database", async () => {
  const ad = await AdProduct.findOne("dc61f2c9-5207-4c34-9d39-5f4123244596");
  expect(ad).toBeDefined();
  expect(ad.description).toEqual("small toy");
});
test("AdProduct.findAll returns array of found entries.", async () => {
  const ad = await AdProduct.findAll();
  expect(ad).not.toEqual([]);
  expect(ad[0].id).toBeDefined();
});
test("AdProduct.remove() deleting product from list", async () => {
  const ad = await AdProduct.findOne("dc61f2c9-5207-4c34-9d39-5f4123244596");
  await ad.remove();
});
test("AdProduct.findCategory search in category cloths", async () => {
  const ad = await AdProduct.findCategory("woman");
  expect(ad).toBeDefined();
  expect(ad).not.toEqual([]);
});
