import { Controller, Get } from '@nestjs/common';
import { ItemsService } from "./items.service";

@Controller('items')
export class ItemsController {
  constructor(private service: ItemsService) {
  }
  @Get()
  async getnewitem(){
    return await this.service.create()
  }
}
