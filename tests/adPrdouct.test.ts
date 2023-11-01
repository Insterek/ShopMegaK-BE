import { AdProduct } from "../records/adProduct.record";
import { pool } from "../utils/db";
const defaultObj = {
  title: "Autumn shoes",
  description:
    "Although moreover mistaken kindness me feelings do be marianne. Son over own nay with tell they cold upon are. Cordial village and settled she ability law herself. Finished why bringing but sir bachelor unpacked any thoughts. Unpleasing unsatiable particular inquietude did nor sir. Get his declared appetite distance his together now families. Friends am himself at on norland it viewing. Suspected elsewhere you belonging continued commanded she.",
  img_url:
    "https://cdn.pixabay.com/photo/2018/12/10/21/34/winter-boots-3867776_1280.jpg",
  price: 11,
  category: "footwear",
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
    title: "Nike shoes",
    description:
      "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
    img_url:
      "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
    price: 12,
    category: "footwear",
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
