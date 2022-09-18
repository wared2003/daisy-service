import { Module } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { InventoriesController } from './inventories.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Item, ItemSchema } from "../items/schema/item.schema";
import { Inventory, InventorySchema } from "./schema/inventory.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: Inventory.name, schema: InventorySchema}])],
  controllers: [InventoriesController],
  providers: [InventoriesService]
})
export class InventoriesModule {}
