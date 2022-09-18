import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ItemSchema, Item } from "./schema/item.schema";
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Item.name, schema: ItemSchema}])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
