import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsString,
  IsUrl,
} from '@nestjs/class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly stock: number;

  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
