import { Delete, Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { Item, ItemDocument } from "./shemas/item.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateItemDto } from "./dtos/createItem.dto";

/**
 * @author Edouard Nicolas
* */
@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private ItemModel: Model<ItemDocument>) {}


  /**
   * It returns all the items in the database
   * @returns An array of all the items in the database.
   */
  getMany(){
    return this.ItemModel.find();
  }

  /**
   * It returns a promise that resolves to a single document from the database
   * @param ref - The reference of the item you want to get.
   * @returns The ItemModel.findOne({ref: ref}) is being returned.
   */
  getOneByRef(ref){
    return this.ItemModel.findOne({ref: ref})
  }

   /**
    * It creates a new item in the database
    * @param item - The item to be created.
    * @returns A promise of an Item
    */
   async create(item): Promise<Item | InternalServerErrorException | NotAcceptableException> {
     if (item.ref) {
       try {
         const items = await this.ItemModel.find({ref: item.ref});
         if (items.length > 0) {
           return new NotAcceptableException({message: 'ref already exist'})
         }
         const createdItem = new this.ItemModel(item);
         return createdItem.save();
       } catch {
         return new InternalServerErrorException('internal serveur error during item db persistance')
       }
     }
   }

  /**
   * It updates one item in the database by its reference.
   * @param {string} ref - string - the reference of the item you want to update
   * @param {Item} item - Item - this is the item that we are going to update.
   * @returns The result of the updateOneByRef function is a promise.
   */
  updateOneByRef(ref: string, item: Item){
     return this.ItemModel.updateOne({ref: ref}, {$set: item})
  }

  /**
   * This function deletes one item from the database by its ref
   * @param {string} ref - the ref of the item you want to delete
   * @returns The result of the deleteOneById function is the result of the deleteOne function.
   */
  deleteOneById(ref: string){
    return this.ItemModel.deleteOne({ref: ref})
  }

}
