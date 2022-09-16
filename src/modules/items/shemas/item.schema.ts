import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString } from "class-validator";
export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({unique: true})
  ref: string;

  @Prop()
  name: string;

  @Prop()
  inventory: string;

  @Prop()
  imgUrls: [string];

  @Prop()
  quantity: number;

  @Prop()
  precisions: string;

  @Prop()
  type: [string];

  @Prop()
  category: [string];
}

export const ItemSchema = SchemaFactory.createForClass(Item);
