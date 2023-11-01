import { AdEntity } from "./adProduct-entity";

export type CreateProductReq = Omit<AdEntity, "id">;

export interface GetSingleProductRes {
  product: AdEntity;
}
