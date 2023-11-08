export interface NewRegister extends Omit<userRegister, "id"> {
  id?: string;
}
export interface SimpleRegister {
  login: string;
  password: string;
  email: string;
}
export interface userRegister extends SimpleRegister {
  id: string;
  permision?: string;
}
