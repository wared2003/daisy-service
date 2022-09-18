import { Prop } from "@nestjs/mongoose";
import { InventoryItemModel } from "../models/inventory-item.model";
import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateInventoryDto {
  /** ul ref like 9200 or 9228 or whatever*/
  @IsString()
  ul: string;

  /** inventory name like vps, reserve ... */
  @IsString()
  name: string;

  /** items constained in the inventory*/
  @IsArray()
  @IsOptional()
  items: [InventoryItemModel];
}
