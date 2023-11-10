import { AdEntity, NewAdProduct } from "../types/adProduct";
import { v4 as uuid } from "uuid";
import { ValidationError } from "../utils/error";
import { pool } from "../utils/db";
import { FieldPacket } from "mysql2";
type AdProductResult = [AdEntity[], FieldPacket[]];

export class AdProduct implements AdEntity {
  public id: string;
  public title: string;
  public description: string;
  public img_url: string;
  public price: number;
  public category: string;
  constructor(obj: NewAdProduct) {
    if (!obj.title || obj.title.length > 100) {
      throw new ValidationError(
        "This title can't be empty and length must be  smaller than 100 characters."
      );
    }
    if (obj.description.length > 1000) {
      throw new ValidationError(
        "Description must be smaller than 1000 characters."
      );
    }
    if (obj.price < 0 || obj.price > 9999) {
      throw new ValidationError(
        "Price can't be less than 0 and greater than 9999,99."
      );
    }
    if (!obj.img_url || obj.img_url.length < 0) {
      throw new ValidationError(
        "This title can't be empty and length must be  smaller than 2082 characters."
      );
    }
    if (!obj.category) {
      throw new ValidationError("This category can't be empty");
    }
    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
    this.img_url = obj.img_url;
    this.price = obj.price;
    this.category = obj.category;
  }
  async insert(): Promise<void> {
    if (!this.id) {
      this.id = uuid();
    } else {
      throw new Error("This id is already to use.");
    }
    await pool.execute(
      "INSERT INTO `ad_product`(`id`, `title`, `description`, `img_url`,`price`,`category`) VALUES(:id, :title, :description, :img_url, :price, :category)",
      this
    );
  }
  static async findOne(id: string): Promise<AdProduct | null> {
    const [results] = (await pool.execute(
      "SELECT * FROM `ad_product` WHERE `id` = :id",
      { id }
    )) as AdProductResult;
    return results.length === 0 ? null : new AdProduct(results[0]);
  }
  static async findCategory(category: string): Promise<AdProduct[]> {
    const [results] = (await pool.execute(
      "SELECT * FROM `ad_product` WHERE `category` = :category",
      { category }
    )) as AdProductResult;
    return results.map((obj) => new AdProduct(obj));
  }
  static async findAll(): Promise<AdProduct[]> {
    const [results] = (await pool.execute(
      "SELECT * from `ad_product`"
    )) as AdProductResult;
    return results.map((obj) => new AdProduct(obj));
  }
  async remove(): Promise<void> {
    await pool.execute("DELETE FROM `ad_product` WHERE `id` = :id", {
      id: this.id,
    });
  }
}
