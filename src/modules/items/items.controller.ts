import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ItemsService } from "./items.service";
import { CreateItemDto } from "./dtos/createItem.dto";
import { GetManyByInventoryDto } from "./dtos/getManyByInventory.dto";
import { UpdateQuantityByRefDto } from "./dtos/updateQuantityByRef.dto";

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

  @Patch('quantity')
  async updateOneQuantityByRef(@Body() dto: UpdateQuantityByRefDto){
     return this.itemService.updateQuantityByRef(dto.ref, dto.quantity);
  }


  @Delete('/:id')
  async deleteOne(@Param('id') id: string){
     return this.itemService.deleteOneById(id)
  }


}
