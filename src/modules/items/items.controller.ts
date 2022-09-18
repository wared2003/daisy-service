import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ItemsService } from "./items.service";
import { CreateItemDto } from "./dto/createItem.dto";
import { UpdateItemDto } from "./dto/updateItem.dto";

/* This class is a controller that is using the ItemService class to create, update, and delete items */
@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {
  }

  @Get()
  getMany(){
    return this.itemService.getMany()
  }

  @Get(':ref')
  getOne(@Param('ref') ref: string){
    return this.itemService.getOneByRef(ref);
  }

  /* This is a post request that is creating a new item. */
  @Post()
    async create(@Body() itemDto: CreateItemDto){
     return this.itemService.create(itemDto);
  }

  /* This is a patch request that is updating an item by its ref. */
  @Patch(':ref')
  async updateByref(@Param('ref') ref: string, @Body() itemDto: UpdateItemDto){
    return this.itemService.updateOneByRef(ref, itemDto);
  }

 /* This is a delete request that is deleting an item by its ref. */
   @Delete('/:ref')
  async deleteOne(@Param('ref') ref: string){
     return this.itemService.deleteOneById(ref);
  }


}
