import { Delete, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Item, ItemDocument } from "./shemas/item.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateItemDto } from "./dtos/createItem.dto";

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private ItemModel: Model<ItemDocument>) {}



   create(item): Promise<Item> | InternalServerErrorException {

    try {
      const createdItem = new this.ItemModel(item);
      return createdItem.save();
    }catch {
      return new InternalServerErrorException('internal serveur error during item db persistance')
    }
  }

  deleteOneById(id: string){
    return this.ItemModel.deleteOne({_id: id})
  }

}
