export class InventoryItemModel {
  _id?: string;
  ref?: string;
  name?: string;
  imgUrls?: [string];
  precisions?: string;
  type?: [string];
  category?: [string];
  quantity?: number;
  expirationDate?: Date;
  emplacement?: string;
}
