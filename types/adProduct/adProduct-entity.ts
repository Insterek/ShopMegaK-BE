export interface NewAdProduct extends Omit<AdEntity, "id"> {
  id?: string;
}
export interface SimpleAdProduct {
  id: string;
  description: string;
  category: string;
}
export interface AdEntity extends SimpleAdProduct {
  title: string;
  img_url: string;
  price: number;
}
