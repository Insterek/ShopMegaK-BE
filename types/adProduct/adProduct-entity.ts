// export interface NewAdProduct extends Omit<AdProduct, "id"> {
//   id?: string;
// }
export interface AdProduct {
  id?: string;
  name: string;
  description: string;
  img_url: string;
  price: number;
}
