import { Injectable } from '@nestjs/common';
import { Item, ItemDocument } from "./shemas/item.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private ItemModel: Model<ItemDocument>) {}

  async create(): Promise<Item> {
    const createdItem = new this.ItemModel({name: 'compresse'});
    return createdItem.save();
  }
}
