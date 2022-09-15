import {IsString } from "class-validator";

export class GetManyByInventoryDto {

  @IsString()
  inventory: string;
}
