export interface NewAdProduct extends Omit<AdEntity, "id"> {
  id?: string;
}
export interface SimpleAdProduct {
  description: string;
  category: string;
  img_url: string;
}
export interface AdEntity extends SimpleAdProduct {
  id: string;
  title: string;
  price: number;
}
