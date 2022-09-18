import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { InventoryItemModel } from "../models/inventory-item.model";
export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  /** ul ref like 9200 or 9228 or whatever*/
  @Prop()
  ul: string;

  /** inventory name like vps, reserve ... */
  @Prop()
  name: string;

  /** items constained in the inventory*/
  @Prop()
  items: [InventoryItemModel];


}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
