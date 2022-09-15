import { IsNumber, IsString } from "class-validator";

export class UpdateQuantityByRefDto {

  @IsString()
  ref: string;

  @IsNumber()
  quantity: number;
}
