import { FieldPacket } from "mysql2";
import { NewRegister, userRegister } from "../types/user";
import { pool } from "../utils/db";
import { ValidationError } from "../utils/error";
import { v4 as uuid } from "uuid";
type UserResult = [userRegister[], FieldPacket[]];

export class User implements userRegister {
  public id: string;
  public login: string;
  public password: string;
  public email: string;
  public permision: string;
  constructor(obj: NewRegister) {
    if (obj.login.length <= 4 || obj.login.length >= 24) {
      throw new ValidationError("Login must be between 6 and 24 characters.");
    }
    if (obj.email.length > 365) {
      throw new ValidationError("Email cannot be longer than 365 characters");
    }
    this.id = obj.id;
    this.login = obj.login;
    this.password = obj.password;
    this.email = obj.email;
    this.permision = obj.permision;
  }
  async insert(): Promise<void> {
    if (!this.id) {
      this.id = uuid();
    } else {
      throw new Error("This id is already to use.");
    }
    if (!this.permision) {
      this.permision = "user";
    }
    await pool.execute(
      "INSERT INTO `user`(`id`,`login`, `password`, `email`,`permision`) VALUES(:id, :login, :password,:email,:permision)",
      this
    );
  }
  static async findOne(id: string): Promise<User | null> {
    const [results] = (await pool.execute(
      "SELECT * FROM `user` WHERE `id` = :id",
      { id }
    )) as UserResult;
    return results.length === 0 ? null : new User(results[0]);
  }
  static async findAll(): Promise<User[]> {
    const [results] = (await pool.execute(
      "SELECT * from `user`"
    )) as UserResult;
    return results.map((obj) => new User(obj));
  }
}
