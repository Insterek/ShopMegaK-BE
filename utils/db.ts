import { createPool } from "mysql2/promise";
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "clothing_shop",
  namedPlaceholders: true,
  decimalNumbers: true,
});
