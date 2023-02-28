import { PartialType } from '@nestjs/swagger';
import {
  ValidateNested,
  ValidateIf,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsNumber,
  IsString,
  IsUrl,
  Min,
} from '@nestjs/class-validator';

import { CreateCategoryDto } from './categories.dto';

export class CreateProductDto {
  /**
   * Product's name
   * @example SmartTV
   */
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  /**
   * Product's price
   * @example 2_000_000
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly price: number;

  /**
   * Product's description
   * @example 'Some cool TV'
   */
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  /**
   * Quantity of corresponding product
   * @example 6
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly stock: number;

  /**
   * An URL to the hots server
   * @example https://images/someimage.com
   */
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;

  /**
   * An object that makes reference to any
   * category
   * @example
      name: "Inmported",
      description: "Imported products"
   */
  @ValidateNested()
  @IsNotEmpty()
  readonly category: CreateCategoryDto;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductDto {
  /**
    Where a pagination ends
    @example 1
  */
  @IsOptional()
  @IsPositive()
  @IsNumber()
  limit: number;

  /**
    Where a pagination starts
    @example 24
  */
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;

  /**
    Min price in a range
    @example 1
  */
  @IsOptional()
  @Min(0)
  minPrice: number;

  /**
    Max price in a range
    @example 1000
  */
  @ValidateIf((params) => params.minPrice)
  @IsPositive()
  @IsNumber()
  maxPrice: number;
}
