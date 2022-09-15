import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
