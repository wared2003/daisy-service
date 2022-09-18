import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Item, ItemDocument } from "../items/schema/item.schema";
import { Model } from "mongoose";
import { Inventory, InventoryDocument } from "./schema/inventory.schema";

@Injectable()
export class InventoriesService {
  constructor(@InjectModel(Inventory.name) private InventoryModel: Model<InventoryDocument>) {
  }

  async create(createInventoryDto: CreateInventoryDto)  {
    try {
      const inventories = await this.InventoryModel.find({ul: createInventoryDto.ul, name: createInventoryDto.name})
      if (inventories.length)
        return new NotAcceptableException('already exist');
      const createdInventory = new this.InventoryModel(createInventoryDto);
      return createdInventory.save();
    } catch {
      return new InternalServerErrorException('internal serveur error during inventory db persistance')
    }
  }

  findAll() {
    return this.InventoryModel.find();
  }

  findOne(ul: string, name: string) {
    this.InventoryModel.findOne({ul: ul, name: name})
  }

  update(ul: string, name: string, updateInventoryDto: UpdateInventoryDto) {
    return this.InventoryModel.updateOne({ul: ul, name: name}, {$set: updateInventoryDto})
  }

  remove(ul: string, name: string) {
    return this.InventoryModel.remove({ul: ul, name: name})
  }
}
