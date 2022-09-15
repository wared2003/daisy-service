import { Prop } from "@nestjs/mongoose";
import { IsDate, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateItemDto {

  @IsString()
  ref: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsUrl({each: true})
  imgUrls: [string];

  @IsOptional()
  @IsString()
  quantity: number;

  @IsOptional()
  @IsString()
  emplacement: string;

  @IsOptional()
  @IsDate()
  expirationDate: Date;

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
