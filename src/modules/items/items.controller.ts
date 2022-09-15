import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ItemsService } from "./items.service";
import { CreateItemDto } from "./dtos/createItem.dto";
import { GetManyByInventoryDto } from "./dtos/getManyByInventory.dto";

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {
  }
  @Get()
  getMany(@Query() query: GetManyByInventoryDto){
    return this.itemService.getManyByInventory(query.inventory);
  }


  @Post()
   async create(@Body() itemDto: CreateItemDto){
    return this.itemService.create(itemDto);
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string){
    return this.itemService.deleteOneById(id)
  }
}
