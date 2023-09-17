import { PartialType } from '@nestjs/swagger';
import {
  ValidateIf,
  IsOptional,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsString,
  IsArray,
  IsUrl,
  Min,
} from '@nestjs/class-validator';
import { Category } from '../entities/category.entity';

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
   * Brand category for this product
   * @example 1
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly brandIdentifier: number;

  /**
   * Categories this product belongs to
   * @example ["tech", "imported"]
   */
  @IsNotEmpty()
  @IsArray()
  readonly categories: Category[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class FilterProductsDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  readonly limit: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  readonly offset: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  minPrice: number;

  @ValidateIf((item) => item.minPrice)
  @IsPositive()
  @IsNumber()
  maxPrice: number;
}
