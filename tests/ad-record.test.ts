import { AdProduct } from "../records/adProduct.record";
const defaultObj = {
  id: "1d1341sd12d12r",
  title: "Ad Product",
  description: "random description",
  price: 3,
  img_url: "http://link.com",
  category: "man",
};
test("Can build adProduct", () => {
  const ad = new AdProduct(defaultObj);
  expect(ad.title).toBe("Ad Product");
  expect(ad.description).toBe("random description");
});
