import {
  IsPhoneNumber,
  IsNotEmpty,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  readonly owner: number;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  readonly phone: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
