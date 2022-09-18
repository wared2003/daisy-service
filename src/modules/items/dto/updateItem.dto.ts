import { Prop } from "@nestjs/mongoose";
import { IsDate, IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateItemDto {

  @IsString()
  @IsOptional()
  ref: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsUrl({each: true})
  imgUrls: [string];

  @IsOptional()
  @IsString()
  precisions: string;

  @IsOptional()
  @IsString({each: true})
  type: [string];

  @IsOptional()
  @IsString({each: true})
  category: [string];
}
