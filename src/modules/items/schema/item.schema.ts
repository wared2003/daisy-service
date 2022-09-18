import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({unique: true})
  ref: string;

  @Prop()
  name: string;

  @Prop()
  imgUrls: [string];

  @Prop()
  precisions: string;

  @Prop()
  type: [string];

  @Prop()
  category: [string];
}

export const ItemSchema = SchemaFactory.createForClass(Item);
