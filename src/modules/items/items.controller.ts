import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ItemsService } from "./items.service";
import { CreateItemDto } from "./dtos/createItem.dto";

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {
  }

  @Post()
    async create(@Body() itemDto: CreateItemDto){
     return this.itemService.create(itemDto);
  }

  @Delete('/:id')
  async deleteOne(@Param('id') id: string){
     return this.itemService.deleteOneById(id)
  }


}
